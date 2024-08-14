<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'image' => $this->faker->imageUrl,
            'price' => $this->faker->numberBetween(1000, 10000),
            'description' => $this->faker->text(50),
            'quantity' => 10,
            'bestseller' => $this->faker->numberBetween(0, 1),
            'product_like' => $this->faker->numberBetween(0, 100),
            'slug' => $this->faker->slug,
        ];
    }
}
