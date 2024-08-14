<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image' => $this->image,
            'price' => $this->price,
            'description' => $this->description,
            'quantity' =>$this->quantity,
            'bestseller' => $this->bestseller,
            'like' => $this->product_like,
            'slug' => $this->slug,
            'created_at' => (new Carbon($this->created_at))->format('d-m-y H-i-s'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-y H-i-s'),
        ];
    }
}
