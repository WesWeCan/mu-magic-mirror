<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\BaseImage;

class Corpse extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'base_images',
    ];

    protected $casts = [
        'base_images' => 'array',
    ];



    // find the base images from the array
    // example: [1, 2, 3, -1]
    // if the id is -1 it means it is part of the user, so say YOU
    // if the base image doesn't exist, return say [unknown base image]
    // return a collection of base images, only name and links are needed
    public function getBaseImages()
    {

        $baseImages = collect($this->base_images)->map(function($baseImageId){
            if($baseImageId == -1){
                return [
                    'name' => 'MU Visitor',
                    'link' => '#',
                ];
            }

            $baseImage = BaseImage::find($baseImageId);

            if(!$baseImage){
                return [
                    'name' => '[Unknown Base Image]',
                    'link' => '#',
                ];
            }

            return [
                'name' => $baseImage->name,
                'link' => $baseImage->link,
            ];
        });

        return $baseImages;

    }


}
