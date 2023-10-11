<?php

// namespace App\Http\Controllers;

// use Illuminate\Http\Request;
// use App\Models\User;

// class ProfileController extends Controller
// {
    // /**
    //  * Authenticate a user return info
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\JsonResponse
    //  */
    // // public function show(Request $request)
    // // {
    // //         return $request->user()->select('id', 'name', 'email');
    // // }
    // public function show()
    // {
    //         return Auth::user()->select('id', 'name', 'email');
    // }
    // /**
    //  * Register a new user.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\JsonResponse
    //  */
    // public function update(Request $request)
    // {
    //     $user = $request->user();

    //     $user->name = $request->input('name');
    //     $user->email = $request->input('email');

    //     $user->save();

    //     return response($request->user());
    // }
// }