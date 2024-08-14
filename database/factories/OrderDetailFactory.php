<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderDetail>
 */
class OrderDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quantity' => $this->faker->numberBetween(1, 10),
            'product_price' => $this->faker->numberBetween(1000, 10000),
            'order_id' => Order::inRandomOrder()->first()->id ?? Order::factory(),
            'product_id' => Product::inRandomOrder()->first()->id ?? Product::factory(),
            'slug' => $this->faker->slug,
        ];
    }
}
