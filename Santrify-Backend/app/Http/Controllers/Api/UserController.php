<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{    
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get posts
        $users = User::latest()->paginate(10);

        //return collection of posts as a resource
        return new PostResource(true, 'List Data Posts', $users);
    }

     /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        //define validation rules
        $validator = Validator::make($request->all(), [
            
            'name'     => 'required',
            'email'   => 'required',
            'password' => 'required'
            // id	name	email	email_verified_at	password	remember_token
        ]);

        //check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //upload image
        

        //create post
        $user = User::create([
            
            'name'    => $request->name,
            'email'   => $request->email,
            'password'   => $request->password,
            
        ]);

        //return response
        return new PostResource(true, 'Data Post Berhasil Ditambahkan!', $user);
    }
}

