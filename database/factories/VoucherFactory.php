<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Voucher>
 */
class VoucherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => $this->faker->unique()->lexify('?????'),
            'discount_type' => $this->faker->randomElement(['percent', 'amount']),
            'discount_value' => $this->faker->numberBetween(10, 100),
            'discount_max' => $this->faker->numberBetween(50, 200),
            'quantity' => 50,
            'user_count' => $this->faker->numberBetween(1, 10),
            'slug' => $this->faker->slug,
        ];
    }
}
