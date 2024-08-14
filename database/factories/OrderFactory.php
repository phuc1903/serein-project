<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'total_amount' => $this->faker->numberBetween(1000, 10000),
            'product_quantity' => $this->faker->numberBetween(1, 10),
            'user_id' => \App\Models\User::factory(),
            'voucher_id' => \App\Models\Voucher::factory(),
            'slug' => $this->faker->slug,
        ];
    }
}
