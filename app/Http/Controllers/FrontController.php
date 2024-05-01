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
        foreach($labels as $label){
            $corpse[$label] = MaskImage::inRandomOrder()->where('label', $label)->where('included', true)->with('baseImage')->first();
        }

        return Inertia::render('MorphingMirror', [
            "corpse" => $corpse
        ]);
    }



}
