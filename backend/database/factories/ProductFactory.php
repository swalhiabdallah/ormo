<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        // $images = ['/img/image1.jpg', '/img/image2.jpg', '/img/image2.jpg', '/img/image2.jpg', '/img/image2.jpg'];
        // shuffle($images);
        // $numImages = rand(1,5);
        // 'colors' => json_encode($this->faker->randomElements(['black', 'white', 'red', 'green', 'gray'], rand(1, 5))),
        // 'images' => str_replace('\\/', '/', json_encode(array_slice($images, 0, $numImages))),
        // 'images' => str_replace('\/', '/', json_encode(array_slice($images, 0, $numImages))),

        return [
            // 'name' => $this->faker->word(),
            'name' => $this->faker->sentence(),
            'description' => $this->faker->text(),
            'category_id' => rand(5, 10),
            'price' => $this->faker->randomFloat(2, 10, 100),
            'price_old' => $this->faker->optional()->randomFloat(2, 10, 100),
            'quantity' => rand(1, 50),
            'image' => $this->faker->randomElement(['/img/prod/image1.jpg', '/img/prod/image2.jpg', '/img/prod/image3.jpg', '/img/prod/image4.jpg', '/img/prod/image5.jpg','/img/prod/image1.png', '/img/prod/image2.png', '/img/prod/image3.png', '/img/prod/image4.png', '/img/prod/image5.png']),
            'images' => implode(',', $this->faker->randomElements(['/img/prod/image1.jpg', '/img/prod/image2.jpg', '/img/prod/image3.jpg', '/img/prod/image4.jpg', '/img/prod/image5.jpg','/img/prod/image1.png', '/img/prod/image2.png', '/img/prod/image3.png', '/img/prod/image4.png', '/img/prod/image5.png'], $this->faker->numberBetween(1, 5))),
            'colors' => implode(',', $this->faker->randomElements(['red', 'green', 'blue', 'black'], $this->faker->numberBetween(1, 4))),
            // 'images' => implode(',', $this->faker->randomElements(['/img/image-1.png', '/img/image-2.png', '/img/image-3.png'], $this->faker->numberBetween(1, 3))),
        ];
    }
}