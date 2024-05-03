<?php

namespace App\Http\Controllers;

use App\Models\MaskImage;
use Illuminate\Http\Request;

class MaskImageController extends Controller
{
    

    public function setIncluded(Request $request)
    {

        $request->validate([
            'included' => 'required|boolean',
        ]);

        $maskImage = MaskImage::findOrFail($request->id);
        $maskImage->included = $request->included;
        $maskImage->save();

        return response()->json(['success'=>'You have successfully changed the included status.']);

    }

    public function setLabel(Request $request)
    {
        
        $maskImage = MaskImage::findOrFail($request->id);
        $maskImage->label = $request->label;
        $maskImage->save();
        

        return response()->json(['success'=>'You have successfully changed the label.']);
    }

    public function delete(Request $request)
    {
        
        $maskImage = MaskImage::findOrFail($request->id);
        $maskImage->delete();
        

        return response()->json(['success'=>'You have successfully deleted the mask image.']);
    }


}
