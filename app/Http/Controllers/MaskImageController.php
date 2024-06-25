<?php

namespace App\Http\Controllers;

use App\Models\MaskImage;
use Illuminate\Http\Request;

class MaskImageController extends Controller
{
    

    /**
     * Set the included status of the specified resource.
     * When the included status is set to true, the mask image is included in the corpse.
     * When the included status is set to false, the mask image is not included in the corpse.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setIncluded(Request $request)
    {

        $request->validate([
            'included' => 'required|boolean',
            'id' => 'required|integer',
        ]);

        $maskImage = MaskImage::findOrFail($request->id);
        $maskImage->included = $request->included;
        $maskImage->save();

        return response()->json(['success'=>'You have successfully changed the included status.']);

    }

    /**
     * Set the label of the specified resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function setLabel(Request $request)
    {

        $request->validate([
            'id' => 'required|integer',
            'label' => 'required|string',
        ]);
        
        $maskImage = MaskImage::findOrFail($request->id);
        $maskImage->label = $request->label;
        $maskImage->save();
        

        return response()->json(['success'=>'You have successfully changed the label.']);
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {

        $request->validate([
            'id' => 'required|integer',
        ]);


        $maskImage = MaskImage::findOrFail($request->id);
        $maskImage->delete();
        
        return response()->json(['success'=>'You have successfully deleted the mask image.']);
    }


}
