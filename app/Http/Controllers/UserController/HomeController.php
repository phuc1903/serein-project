<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderDetailResource;
use App\Http\Resources\OrderResource;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;

class HomeController extends Controller
{
    public function index()
    {
        $productSellers = Product::orderBy('bestseller', 'desc')->limit(10)->get();

        $productNews = Product::latest()->limit(10)->get();
        $orderDetails = OrderDetail::where('order_id', 1)->get();;
        $orders = OrderDetailResource::collection($orderDetails);
        // dd($orderDetails);
        return inertia('User/Home/Index', ['productNews' => $productNews, 'productBestsellers' => $productSellers, 'orders' => $orders]); 
    }
}
