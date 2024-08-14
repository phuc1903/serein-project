<?php

namespace App\Http\Controllers\UserController;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function index(User $user)
    {
        $favorites = $user->favorites()->with('product')->latest()->paginate(4);
        $totalFavorites = $favorites->total();


        $favorites->map(function($favorite) {
            $product = $favorite->product;
            $favorite->title = $product->title;
            $favorite->image = $product->image;
            $favorite->price = $product->price;
            return $favorite;
        });

        // dd(session()->get('favorites'));

        return view('article.favorite', ['favorites' => $favorites]);
    }


    public function store(Request $request)
    {
        $product_id = $request->product_id;
        $user_id = Auth::id();
        $favorites = session()->get('favorites', []);

        $now = now();

        if(isset($favorites[$product_id])) {
            if(Auth::check()) {
                $favoritesByUser = Favorite::where('user_id', $user_id)->get();
                dd($favoritesByUser);
            }
            return redirect()->back()->with('warning', 'Sản phẩm đã được thêm vào danh sách yêu thích');
        }
        else {
            $favorites[$product_id] = [
                "product_id" => $product_id,
                "created_at" => $now
            ];
        }
        
        session()->put('favorites', $favorites);

        if(auth()->check()) {
            Favorite::create([
                'product_id' => $product_id,
                'user_id' => auth()->user()->id,
                'created_at' => $now
            ]);
            return redirect()->back()->with('success', 'Sản phẩm đã được thêm vào danh sách yêu thích');
        }

        return redirect()->back()->with('success', 'Sản phẩm đã được thêm vào danh sách yêu thích. Đăng nhập để được lưu trữ ');
    }

    public function destroy(string $favorite)
    {
        
    }
}
