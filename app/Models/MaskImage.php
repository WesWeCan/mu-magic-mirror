<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class MaskImage extends Model
{
    use HasFactory;

    protected $fillable = ['label', 'path', 'included', 'base_image_id'];

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
