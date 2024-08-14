<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FavoriteResource extends JsonResource
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
            'user_id' => new UserResource($this->user_id),
            'product_id' => new ProductResource($this->product_id),
            'slug' => $this->slug,
            'created_at' => (new Carbon($this->created_at))->format('d-m-y H-i-s'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-y H-i-s'),
        ];
    }
}
