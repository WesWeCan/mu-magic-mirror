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
            'background', 'top', 'middle', 'low', 'lowlow', 'left', 'right'
        ];


        $corpse = [];
        $usedBaseImages = [];

        foreach($labels as $label){
            $maskImage = MaskImage::inRandomOrder()
                ->where('label', $label)
                ->where('included', true)
                ->with('baseImage')
                ->first();

            $corpse[$label] = $maskImage;
            $usedBaseImages[] = $maskImage->baseImage->id;
        }

        $availableBaseImages = MaskImage::whereNotIn('base_image_id', $usedBaseImages)->get();

        foreach($corpse as $label => $maskImage){
            $corpse[$label]->availableBaseImages = $availableBaseImages;
        }

        return Inertia::render('MorphingMirror', [
            "corpse" => $corpse
        ]);
    }



}
