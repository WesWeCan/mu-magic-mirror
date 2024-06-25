<?php

namespace App\Http\Controllers;

use App\Models\Corpse;
use App\Models\MaskImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{

    /**
     * Display the front page.
     * 
     * @return \Inertia\Response
     */
    public function index()
    {

        // get the labels
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
        
        $numberOfMaskImagesPerLabel = 25;

        foreach ($labels as $label) {
            // Retrieve MaskImage records in random order that match the current label,
            // are included, and eager load the related baseImage relationship
            $maskImages = MaskImage::inRandomOrder()
                ->where('label', $label)
                ->where('included', true)
                ->with('baseImage')
                ->take($numberOfMaskImagesPerLabel)
                ->get();
        
            // Check if any maskImages are found
            if ($maskImages->isNotEmpty()) {
                // Assign the retrieved maskImages to the corpse array under the current label
                $corpse[$label] = $maskImages;
        
                // Loop through the retrieved maskImages
                foreach ($maskImages as $maskImage) {
                    // Add the id of the baseImage related to the current maskImage to the usedBaseImages array
                    $usedBaseImages[] = $maskImage->baseImage->id;
                }
            }
        }
        
        // Retrieve all baseImages that are not in the usedBaseImages array
        $availableBaseImages = MaskImage::whereNotIn('base_image_id', $usedBaseImages)->get();
        
        // Loop through the corpse array and assign the availableBaseImages to each maskImage
        foreach ($corpse as $label => $maskImages) {
            foreach ($maskImages as $maskImage) {
                $maskImage->availableBaseImages = $availableBaseImages;
            }
        }

        return Inertia::render('App/MorphingMirror', [
            "corpses" => $corpse
        ]);
    }

    /**
     * Archive the user generated corpse.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
