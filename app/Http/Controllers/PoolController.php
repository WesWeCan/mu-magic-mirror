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
    


    public function uploadBase(Request $request)
    {

        $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imageName = time() . "_" . $request->image->getClientOriginalName();

        $request->image->storeAs('baseImages', $imageName, 'public');


        $baseImage = new BaseImage();
        $baseImage->name = $request->title;
        $baseImage->link = $request->link;
        $baseImage->path = '/storage/baseImages/' . $imageName;
        $baseImage->processed = false;

        $baseImage->save();



        return response()->json(['success'=>'You have successfully uploaded an image.']);
    }


    public function uploadMasked(Request $request)
    {

        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'label' => 'required|string|max:255',
            'included' => 'required|boolean',
            'base_image_id' => 'required|integer'
        ]);

        $baseImage = BaseImage::find($request->base_image_id);

        if(!$baseImage){
            return response()->json(['error'=>'Base Image not found.']);
        }

        $imageName = time() . "_" . $request->image->getClientOriginalName();

        $request->image->storeAs('maskImages', $imageName, 'public');

        $maskImage = new MaskImage();

        $maskImage->label = $request->label;
        $maskImage->path = '/storage/maskImages/' . $imageName;
        $maskImage->base_image_id = $request->base_image_id;
        $maskImage->included = $request->included;

        $maskImage->save();

        $baseImage->processed = true;
        $baseImage->save();

        

        return response()->json(['success'=>'You have successfully uploaded an image.']);

    }



    public function poolProcessor(){


        $baseImages = BaseImage::where('processed', false)->get();

        return Inertia::render('PoolProcesser', [
            'baseImages' => $baseImages
        ]);
        
    }



}
