<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Banner extends Model
{
    use HasFactory;

    protected $fillable = [
        'collection',
        'title',
        'description',
        'link',
        'image',
        'banner_show',
        'action',
        'backgound'
    ];
}
