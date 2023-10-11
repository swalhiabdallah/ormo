<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {


       // Create parent categories
       $parentCategories = Category::factory()->count(4)->create([
        'parent_id' => null,
       ]);
       // For each parent category, create 3 child categories
       foreach ($parentCategories as $parentCategory) {
           Category::factory()->count(4)->create([
               'parent_id' => $parentCategory->id,
           ]);
       }
    }
}
