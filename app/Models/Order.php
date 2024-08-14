<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'total_amount',
        'product_quantity',
        'description',
        'user_id',
        'voucher_id',
        'slug',
    ];

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function voucher():BelongsTo
    {
        return $this->belongsTo(Voucher::class);
    }
}
