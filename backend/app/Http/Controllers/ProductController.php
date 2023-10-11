<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Category;


class ProductController extends Controller
{


    // Get All Product
    
    public function index()
    
    {
        $products = Product::with('category.parentCategory')->get()->map(function($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'price' => $product->price,
                'price_old' => $product->price_old,
                'quantity' => $product->quantity,
                'category_parent_name' => optional($product->category->parentCategory)->name,
                'category_parent_id' => optional($product->category->parentCategory)->id,
                'category_name' => $product->category->name,
                'category_id' => $product->category->id,
                'image' => $product->image,
                'colors' => explode(',', $product->colors),
                'images' => explode(',', $product->images),
                'created_at' => $product->created_at,
                'updated_at' => $product->updated_at,
            ];
        });
    
    return $products;
}


// foreach ($products as $product) {
//     $product->images = str_replace("'", '"', $product->images);
//     $product->images = json_decode($product->images);
// }

    // Create Product & Validation

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'name' => 'required|max:255',
    //         'description' => 'required',
    //         'price' => 'required|numeric|min:0',
    //         'price_old' => 'nullable|numeric|min:0',
    //         'category_id' => 'sometimes|required',
    //         'quantity' => 'required|integer|min:0',
    //         'colors' => 'nullable|string',
    //         'image' => 'nullable|string',
    //         'images' => 'nullable|string',
    //     ]);
    //     $product = Product::create($request->all());

    //     return response(['message' => 'Product created successfully'], 201);
    // }
    
    // // Get Single Product 

    public function show($id)
    {
        $product = Product::findOrFail($id);
        // $id = $product->id;
        // $name= $product->name;
        // $description = $product->description;
        // $price = $product->price;
        // $price_old = $product->price_old;
        // $quantity = $product->quantity;
        // $category_parent_name = optional($product->category->parentCategory)->name;
        // $category_parent_id = optional($product->category->parentCategory)->id;
        // $category_name = $product->category->name;
        // $category_id = $product->category->id;
        // $image = $product->image;
        // $colors = explode(',', $product->colors);
        // $images = explode(',', $product->images);
        // $created_at = $product->created_at;
        // $updated_at = $product->updated_at;
        
        // return $name;
        return [
            'id' => $product->id,
            'name' => $product->name,
            'description' => $product->description,
            'price' => $product->price,
            'price_old' => $product->price_old,
            'quantity' => $product->quantity,
            'category' => [
                'parent_name' => optional($product->category->parentCategory)->name,
                'parent_id' => optional($product->category->parentCategory)->id,
                'name' => $product->category->name,
                'id' => $product->category->id,
            ],
            'image' => $product->image,
            'colors' => explode(',', $product->colors),
            'images' => explode(',', $product->images),
            'created_at' => $product->created_at,
            'updated_at' => $product->updated_at,];

    }

    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|max:255',
        'description' => 'required',
        'price' => 'required|numeric|min:0',
        'price_old' => 'nullable|numeric|min:0',
        'category_id' => 'sometimes|required',
        'quantity' => 'required|integer|min:0',
        'colors' => 'nullable|string',
        'image' => 'nullable|string',
        'images' => 'nullable|string',
        // 'images.*' => 'url', // validate each URL in the array
    ]);

    $product = new Product;
    $product->name = $request->input('name');
    $product->description = $request->input('description');
    $product->price = $request->input('price');
    $product->price_old = $request->input('price_old');
    $product->category_id = $request->input('category_id');
    $product->quantity = $request->input('quantity');
    $product->colors = $request->input('colors');
    $product->images = $request->input('images');

    // // Handle image
    // if ($request->has('image')) {
    //     $product->image = $request->input('image');
    // }

    // // Handle images
    // if ($request->has('images')) {
    // }

    $product->save();

    return response()->json(['success' => true]);
}


    // Update Product

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update($request->all());
        // return $product;
        return response(['message' => 'Product Updated Successfully']);
    }

    // Delete Product

    public function destroy($id)
    {
        return Product::destroy($id);
    }

    // Search Products

    public function search($name)
    {
        return Product::where('name', 'LIKE', "%$name%")
        ->orWhere('description', 'LIKE', "%$name%")
        ->get();
    }

}
