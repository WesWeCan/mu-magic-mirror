<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;


/** A mask image is a part of a base image.
 * It is used to slice the base image.
 * it has a label that is associated with the part from the pose estimation.
 * 
 * @property int $id
 * @property string $label
 * @property string $path
 * @property bool $included
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Model|\App\Models\BaseImage $base_image
 */
class MaskImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'path',
        'included',
        'base_image_id'
    ];

    protected $casts = [
        'included' => 'boolean',
    ];

    public function baseImage()
    {
        return $this->belongsTo(BaseImage::class);
    }


    public function delete()
    {
        // Delete the associated image from storage
        Storage::delete($this->path);

        // Delete the model
        return parent::delete();
    }
}
