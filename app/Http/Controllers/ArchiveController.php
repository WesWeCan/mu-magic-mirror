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

    /**
     * Display the archive page.
     * 
     * @return \Inertia\Response
     */
    public function archive()
    {
        $corpses = Corpse::latest()->get();

        $corpseData = $corpses->map(function ($corpse) {
            return [
                "id" => $corpse->id,
                'path' => $corpse->path,
                'base_images' => $corpse->getBaseImages(),
            ];
        });

        return Inertia::render('Pool/PoolArchive', [
            'corpseArchive' => $corpseData,
        ]);
    }


    /**
     * Delete the specified resource from storage.
     * As well as the image and corpse image.
     * 
     * @param  int  $id
     * @return \Inertia\Response
     */
    public function destroy($id)
    {

        $corpse = Corpse::findOrFail($id);
        $corpse->delete();

        return response()->json(['success' => 'You have successfully deleted the corpse.']);
    }
}
