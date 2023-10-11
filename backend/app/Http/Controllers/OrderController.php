<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use App\Http\Resources\OrderItemResource;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $orders = Order::where('user_id', $user->id)->get();

        return response(['orders' => $orders]);
    }


    public function create(Request $request)
    {    
        $user = Auth::user();
        $orderItems = $request->input('items');
        $totalPrice = 0;
        
        // Calculate total price based on items
        foreach ($orderItems as $item) {
            $product = Product::find($item['product_id']);
            $subtotal = $product->price * $item['quantity'];
            $totalPrice += $subtotal;
        }

        $order = new Order([
            'user_id' => $user->id,
            // 'total_price' => $totalPrice,
            'status' => $request->input('status'),
        ]);
        $order->save();

        foreach ($orderItems as $item) {
            $product = Product::find($item['product_id']);
            $orderItem = new OrderItem([
                'product_id' => $product->id,
                'order_id' => $order->id,
                'quantity' => $item['quantity'],
                'price' => $product->price,
            ]);
            $order->orderItems()->save($orderItem);
        }

        return response(['success' => true, 'order_id' => $order->id, 'total_price' => $totalPrice ,'OrderItem'=> $order->orderItems()->get() ]);
        // return Auth::user();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }



    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $order = Order::find($id);
        return response(['order' => $order]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $order = Order::find($id);
        $order->total_price = $request->input('total_price');
        $order->status = $request->input('status');
        $order->save();

        return response(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $order = Order::find($id);
        $order->orderitems()->delete();
        $order->delete();

        return response(['success' => true]);
    }




}
