<?php

namespace App\Http\Controllers;

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
}
