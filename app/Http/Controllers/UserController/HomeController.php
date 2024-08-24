<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Http\Resources\BannerResource;
use App\Models\Banner;
use App\Models\Product;

class HomeController extends Controller
{
    public function index()
    {
        $productSellers = Product::orderBy('bestseller', 'desc')->limit(10)->get();

        $productNews = Product::latest()->limit(10)->get();

        $banners = BannerResource::collection(Banner::latest()->limit(10)->get());

        // dd($orderDetails);
        return inertia('User/Home/Index', ['productNews' => $productNews, 'productBestsellers' => $productSellers, "banners" => $banners]); 
    }
}
