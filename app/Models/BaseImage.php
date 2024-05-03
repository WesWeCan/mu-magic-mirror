<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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


    public static function boot()
    {
        parent::boot();

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
