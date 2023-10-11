<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::with('parentCategory')->get()->map(function($category) {
            return [
                'id' => $category->id,
                'name' => $category->name,
                'description' => $category->description,
                'parent_id' => $category->parent_id,
                'parent_name' => optional($category->parentCategory)->name,
                'created_at' => $category->created_at,
                'updated_at' => $category->updated_at,
            ];
        });

        return $categories;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = new Category;
        $category->name = $request->name;
        $category->description = $request->description;
        $category->parent_id = $request->parent_id;
        $category->save();

        return response([
            'message' => 'Category Created successfully!',
            'category' => $category,
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $category = Category::with('parentCategory')->find($id);
        if (!$category) {
            return response()->json([
                'message' => 'Category not found'
            ], 404);
        }

        return response([
            'category' => [
                'id' => $category->id,
                'name' => $category->name,
                'description' => $category->description,
                'parent_id' => $category->parent_id,
                'parent_name' => optional($category->parentCategory)->name,
                'created_at' => $category->created_at,
                'updated_at' => $category->updated_at,
            ]
        ]);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response([
                'message' => 'Category not found'
            ], 404);
        }

        $category->name = $request->name;
        $category->description = $request->description;
        $category->parent_id = $request->parent_id;
        $category->save();

        return response([
            'message' => 'Category updated successfully!',
            'category' => $category,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response([
                'message' => 'Category not found'
            ], 404);
        }

        $category->delete();

        return response([
            'message' => 'Category deleted successfully!'
        ]);
    }


}



