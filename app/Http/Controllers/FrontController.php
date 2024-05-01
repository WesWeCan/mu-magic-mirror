<?php

namespace App\Http\Controllers;

use App\Models\MaskImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontController extends Controller
{
    

    public function index()
    {

        $corpse = [
          

            'head' => MaskImage::inRandomOrder()->where('label', 'head')->where('included', true)->with('baseImage')->first(),

            'left_arm' => MaskImage::inRandomOrder()->where('label', 'left_arm')->where('included', true)->with('baseImage')->first(),

            'right_arm' => MaskImage::inRandomOrder()->where('label', 'right_arm')->where('included', true)->with('baseImage')->first(),

            'left_leg' => MaskImage::inRandomOrder()->where('label', 'left_leg')->where('included', true)->with('baseImage')->first(),

            'right_leg' => MaskImage::inRandomOrder()->where('label', 'right_leg')->where('included', true)->with('baseImage')->first(),

            'torso' => MaskImage::inRandomOrder()->where('label', 'torso')->where('included', true)->with('baseImage')->first(),

        ];

        return Inertia::render('MagicMirror', [
            "corpse" => $corpse
        ]);
    }



}
