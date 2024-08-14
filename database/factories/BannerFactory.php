<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Banner>
 */
class BannerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'collection' => $this->faker->word,
            'title' => $this->faker->text(50),
            'description' => $this->faker->paragraph,
            'link' => $this->faker->url,
            'image' => $this->faker->imageUrl,
            'banner_show' => true,
            'action' => $this->faker->word,
            'background' => $this->faker->hexColor,
            'slug' => $this->faker->slug,
        ];
    }
}
