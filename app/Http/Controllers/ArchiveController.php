<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\BaseImage;
use App\Models\Corpse;
use App\Models\MaskImage;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ArchiveController extends Controller
{
    public function gallery(){

        $corpses = Corpse::latest()->get();

        
        $corpseData = $corpses->map(function($corpse){
            return [
                "id" => $corpse->id,
                'path' => $corpse->path,
                'base_images' => $corpse->getBaseImages(),
            ];
        });
        
        return Inertia::render('PoolGallery', [
            'corpseArchive' => $corpseData,
        ]);

    }

    public function destroy($id){

        $corpse = Corpse::findOrFail($id);

        $imagePath = $corpse->path;
        Storage::delete($imagePath);

        $corpse->delete();

        return response()->json(['success'=>'You have successfully deleted the corpse.']);

    }


}
