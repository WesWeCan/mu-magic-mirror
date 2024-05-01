<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaseImage extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'link', 'path', 'processed'];

    protected $casts = [
        'processed' => 'boolean',
    ];

    public function maskImages()
    {
        return $this->hasMany(MaskImage::class);
    }


}
