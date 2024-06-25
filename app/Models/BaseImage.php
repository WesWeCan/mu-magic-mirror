<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

/**
 * BaseImage model.
 * A base image is an original image that is used as a basis for slicing.
 * It contains the name and link of the image.
 * 
 * @property int $id
 * @property string $name
 * @property string $link
 * @property string $path
 * @property bool $processed
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\MaskImage[] $mask_images
 */
class BaseImage extends Model
{
    use HasFactory;

    protected $fillable = [
    'name',
     'link',
     'path',
     'processed'
    ];

    protected $casts = [
        'processed' => 'boolean',
    ];

    public function maskImages()
    {
        return $this->hasMany(MaskImage::class);
    }


    public static function boot()
    {
        parent::boot();


        /**
         * Delete the associated mask images when the base image is deleted.
         */
        static::deleting(function($baseImage) {
            $baseImage->maskImages->each->delete();
        });
    }

    public function delete()
    {
        // Delete the associated image from storage
        Storage::delete($this->path);

        // Delete the model
        return parent::delete();
    }


}
