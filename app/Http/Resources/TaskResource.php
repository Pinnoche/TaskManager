<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
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
            'author' => ucwords($this->author),
            'title' => ucwords($this->title),
            'description' => $this->description,
            'created_at' => Carbon::parse($this->created_at)->diffForHumans()
        ];
    }
}
