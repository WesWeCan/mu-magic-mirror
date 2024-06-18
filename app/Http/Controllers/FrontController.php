<?php

namespace App\Http\Controllers;

use App\Models\Corpse;
use App\Models\MaskImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{


    public function index()
    {

        $labels = [
            "head",
            "torso",
            "right_arm",
            "left_arm",
            "right_leg",
            "left_leg",
            "right_hand",
            "left_hand",
            "right_foot",
            "left_foot",
            "hair",
            "legs"
        ];


        $corpse = [];
        $usedBaseImages = [];
        
        foreach ($labels as $label) {
            $maskImages = MaskImage::inRandomOrder()
                ->where('label', $label)
                ->where('included', true)
                ->with('baseImage')
                ->take(25)
                ->get();
        
            if (!$maskImages->isEmpty()) {
                $corpse[$label] = $maskImages;
                foreach ($maskImages as $maskImage) {
                    $usedBaseImages[] = $maskImage->baseImage->id;
                }
            }
        }
        
        $availableBaseImages = MaskImage::whereNotIn('base_image_id', $usedBaseImages)->get();
        
        foreach ($corpse as $label => $maskImages) {
            foreach ($maskImages as $maskImage) {
                $maskImage->availableBaseImages = $availableBaseImages;
            }
        }

        return Inertia::render('MorphingMirror', [
            "corpses" => $corpse
        ]);
    }



    public function archive(Request $request)
    {

        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'usedPieces' => 'required|string',
        ]);

        $usedPieces = json_decode($request->usedPieces);
    
        $imageName = time() . "_" . $request->image->getClientOriginalName();

        // Ensure the file extension is correct
        $extension = $request->image->extension();
        $imageNameWithExtension = $imageName . '.' . $extension;
    
        // Store the image
        $request->image->storeAs('corpseImages', $imageNameWithExtension, 'public');

        $path = '/storage/corpseImages/' . $imageNameWithExtension;


        $corpse = new Corpse();
        $corpse->path = $path;
        $corpse->base_images = $usedPieces;
        $corpse->save();


        return response()->json(['success'=>'You have successfully uploaded an image.']);
    }


}
