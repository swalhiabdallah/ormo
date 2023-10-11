<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// use App\Http\Controllers\ProfileController; 
// use App\Models\Product;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



################################# Users ##########################################

// Register new user
Route::post('/register', [AuthController::class, 'register']);

// Login user
Route::get('/login', [AuthController::class, 'login'])->name('login');

// Login user
Route::post('/login', [AuthController::class, 'login']);

###########################################################################


################################# Products ##########################################

// List all products
Route::get('/products', [ProductController::class, 'index']);

// Show a specific product
Route::get('/products/{product}', [ProductController::class, 'show']);

// Create a new product
Route::post('/products', [ProductController::class, 'store']);

// Update a specific product
Route::put('/products/{product}', [ProductController::class, 'update']);

// Search product
Route::get('/products/search/{name}', [ProductController::class,'search']);

// Delete a specific product
Route::delete('/products/{product}', [ProductController::class, 'destroy']);

###########################################################################


################################# categories ##########################################

// List all categories
Route::get('/categories', [CategoryController::class, 'index']);

// Show a category by ID
Route::get('/categories/{id}', [CategoryController::class, 'show']);

// Create a new category
Route::post('/categories', [CategoryController::class, 'store']);

// Update an existing category
Route::put('/categories/{id}', [CategoryController::class, 'update']);

// Delete a category by ID
Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

###########################################################################


################################# Auth ##########################################

// Only auth users
Route::group(['middleware' => ['auth:sanctum']], function () {

        ################################# orders ###########################################

        // Get all orders
        Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');

        // Create an order
        // Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');
        Route::post('/orders', [OrderController::class, 'create']);

        // Get a single order by ID
        Route::get('/orders/{id}', [OrderController::class, 'show'])->name('orders.show');

        // Update an order by ID
        Route::put('/orders/{id}', [OrderController::class, 'update'])->name('orders.update');

        // Delete an order by ID
        Route::delete('/orders/{id}', [OrderController::class, 'destroy'])->name('orders.destroy');

        ###########################################################################

        ################################# user ##########################################

        // Logout user
        Route::get('/logout', [AuthController::class, 'logout']);

        // User info
        Route::get('/user', [AuthController::class, 'show']);

        ###########################################################################

        
});

###########################################################################


################################# Admin ##########################################

// Only Admin
Route::group(['middleware' => ['auth:sanctum', 'admin:admin']], function () {

            Route::get('/test', [ProductController::class, 'index']);

});

###########################################################################





    /* Route::middleware('auth:sanctum')->get('/user', function () {
        Route::get('/products/search/{name}', [ProductController::class,'search']);
    }); */
    
    /* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
        return $request->user();
    }); */
    
    // Route::get('/products', [ProductController::class,'index']);
    // Route::post('/products', [ProductController::class,'store']);
    // Route::get('/products/{id}', [ProductController::class,'show']);
    // Route::get('/products/search/{name}', [ProductController::class,'search']);
    // Route::resource('products', ProductController::class);


