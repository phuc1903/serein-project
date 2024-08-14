<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BannerResource extends JsonResource
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
            'collection' => $this->collection,
            'title' => $this->title,
            'link' => route($this->link),
            'description' => $this->description,
            'image' => $this->image,
            'banner_show' => $this->banner_show,
            'action' => $this->action,
            'backgound' => $this->background,
            'created_at' => (new Carbon($this->created_at))->format('d-m-y H-i-s'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-y H-i-s'),
        ];
    }
}
