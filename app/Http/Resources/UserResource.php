<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'email' => $this->email,
            'avatar' => $this->avatar,
            'role' => $this->role,
            'phone' => $this->phone,
            'address' => $this->address,
            'sex' => $this->sex,
            'email_verified_at' => $this->email_verified_at,
            'password' => $this->password, 
            'slug' => $this->slug,
            'created_at' => (new Carbon($this->created_at))->format('d-m-y H-i-s'),
            'updated_at' => (new Carbon($this->updated_at))->format('d-m-y H-i-s'),
        ];
    }
}
