<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            // return response()->json(['errors' => $validator->errors()], 422);
            return response('errors', 422);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('authToken')->plainTextToken;

        return response(['user' => $user, 'token' => $token], 201);
    }

    /**
     * Authenticate a user and generate a token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)

    {
        $remember = $request->boolean('remember');
        $credentials = $request->only('email', 'password');


        if (Auth::attempt($credentials)) {
            $user = $request->user();
            $name = $user->name;
            $email = $user->email;
            $token = $user->createToken('authToken')->plainTextToken;

            return response(['user' => ['name' => $name,'email' => $email,] , 'token' => $token,'expires_in' => $token->accessToken->expires_at->diffInSeconds(now())], 200)->withCookie(cookie('remember_me', $token, 20160));
        }

        return response(['message' => 'Invalid credentials'], 401);
    }

    /**
     * Logout a user and revoke their token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response(['message' => 'Logged out'], 200);
    }

    /**
     * Authenticate a user and generate a token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
    {
            // return $request->user()->select('id', 'name', 'email');
            return Auth::user();
    }
}