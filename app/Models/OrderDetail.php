<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'product_price',
        'order_id',
        'product_id',
        'slug',
    ];

    public function order():BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function products():HasMany
    {
        return $this->hasMany(Product::class);
    }
}
