<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
