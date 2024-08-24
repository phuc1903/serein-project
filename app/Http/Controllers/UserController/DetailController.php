<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class DetailController extends Controller
{
    public function index(Product $product)
    {
        $product = ProductResource::make($product);

        return inertia('User/Detail/Index', [
            'product' => $product,
        ]);
    }
}
