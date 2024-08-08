<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

use App\Models\BaseImage;
use App\Models\MaskImage;
use Inertia\Inertia;

class PoolController extends Controller
{


    /** View the pool uploader.
     * 
     * @return \Inertia\Response
     * 
     */
    public function upload(){
        return Inertia::render('Pool/PoolUploader');
    }


    /**
     * View the pool slicer.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function poolProcessor()
    {
        $baseImages = BaseImage::where('processed', false)->get();
        return Inertia::render('Pool/PoolSlicer', [
            'baseImages' => $baseImages
        ]);
    }


    /**
     * View the pool manager.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function poolManager()
    {

        $baseImages = BaseImage::where('processed', true)->with("maskImages")->get();

        return Inertia::render('Pool/PoolManager', [
            'baseImages' => $baseImages
        ]);
    }



    /**
     * Upload a base image.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function uploadBase(Request $request)
    {

        $request->validate([
            'title' => 'required|string|max:255',
            'link' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imageName = time() . "_" . $request->image->getClientOriginalName();

        $request->image->storeAs('baseImages', $imageName, 'public');

        // Create a new base image
        $baseImage = new BaseImage();
        $baseImage->name = $request->title;
        $baseImage->link = (isset($request->link) && strlen($request->link) > 0) ? $request->link : '#';
        $baseImage->path = '/storage/baseImages/' . $imageName;
        $baseImage->processed = false;

        $baseImage->save();

        return response()->json(['success' => 'You have successfully uploaded an image.']);
    }

    /**
     * Mark a base image as processed.
     * It won't be showing up in the pool slicer.
     *  
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function markAsProcessed($id)
    {

        $baseImage = BaseImage::findOrFail($id);

        if (!$baseImage) {
            return response()->json(['error' => 'Base Image not found.']);
        }

        $baseImage->processed = true;
        $baseImage->save();

        return response()->json(['success' => 'You have successfully marked the image as processed.']);
    }

    /**
     * Delete a mask image.
     * 
 
     */
    public function deleteMasked($id)
    {
        
        
        $maskImage = MaskImage::findOrFail($id);
        $maskImage->delete();
        
        return response()->json(['success' => 'You have successfully deleted the mask image.']);
    }


    /**
     * Upload a masked image.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function uploadMasked(Request $request)
    {

        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'label' => 'required|string|max:255',
            'included' => 'required|boolean',
            'base_image_id' => 'required|integer'
        ]);

        $baseImage = BaseImage::find($request->base_image_id);

        if (!$baseImage) {
            return response()->json(['error' => 'Base Image not found.']);
        }

        $imageName = time() . "_" . rand(1000, 9999) . "_" . $request->image->getClientOriginalName();

        $request->image->storeAs('maskImages', $imageName, 'public');

        $maskImage = new MaskImage();

        $maskImage->label = $request->label;
        $maskImage->path = '/storage/maskImages/' . $imageName;
        $maskImage->base_image_id = $request->base_image_id;
        $maskImage->included = $request->included;

        $maskImage->save();

        $baseImage->processed = true;
        $baseImage->save();


        return response()->json(['success' => 'You have successfully uploaded an image.']);
    }

    
}
