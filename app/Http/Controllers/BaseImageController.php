<?php

namespace App\Http\Controllers;

use App\Models\BaseImage;
use Illuminate\Http\Request;

class BaseImageController extends Controller
{
    

    /**
     * Set the processed status  of the specified resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setProcessed(Request $request)
    {
        $baseImage = BaseImage::findOrFail($request->id);
        $baseImage->processed = $request->processed;
        $baseImage->save();


        return response()->json(['success'=>'You have successfully changed the processed status.']);
    }

    /**
     * Set the title of the specified resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setTitle(Request $request)
    {

        $request->validate([
            'title' => 'required|string|max:255',
            'id' => 'required|integer',
        ]);
        
        $baseImage = BaseImage::findOrFail($request->id);
        $baseImage->name = $request->title;
        $baseImage->save();
        

        return response()->json(['success'=>'You have successfully changed the title.']);
    }

    /**
     * Set the link of the specified resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setLink(Request $request)
    {

        $request->validate([
            'link' => 'required|string|url|max:255',
            'id' => 'required|integer',
        ]);
        
        $baseImage = BaseImage::findOrFail($request->id);
        $baseImage->link = $request->link;
        $baseImage->save();

        return response()->json(['success'=>'You have successfully changed the link.']);
    }


    /**
     * Remove the specified resource from storage.
     * Mask images are delete on baseimage delete.
     * 
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function destroy($id)
    {
        $baseImage = BaseImage::findOrFail($id);
        $baseImage->delete();
        
        return response()->json(['success'=>'You have successfully deleted the image.']);
    }
}
