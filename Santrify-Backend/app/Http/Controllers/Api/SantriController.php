<?php

namespace App\Http\Controllers\Api;

use App\Models\Santri;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SantriController extends Controller
{    
    /**
     * index
     *
     * @return void
     */
    public function index()
    {
        //get posts
        $santris = Santri::latest()->paginate(5);

        //return collection of posts as a resource
        return new PostResource(true, 'List Data Posts', $santris);
    }

    /**
     * store
     *
     * @param  mixed $request
     * @return void
     */
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

            'nama' => 'required',
            'gender' => 'required',
            'status' => 'required',
            'room' => 'required',
            'division' => 'required',
            'gambar'     => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
            
        ]);

        //check if validation fails
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        //upload image
        $image = $request->file('gambar');
        $image->storeAs('public/posts', $image->hashName());

        //create post
        $santris = Santri::create([
            'gambar'     => $image->hashName(),
            'nama'      => $request->nama,
            'gender'    => $request->gender,
            'status'    => $request->status,
            'room'      => $request->room,
            'division'   => $request->division
        ]);

        //return response
        return new PostResource(true, 'Data Post Berhasil Ditambahkan!', $santris);
    }

}

//     /**
//      * show
//      *
//      * @param  mixed $post
//      * @return void
//      */
//     public function show(Santri $santris)
//     {
//         //return single post as a resource
//         return new PostResource(true, 'Data Post Ditemukan!', $santris);
//     }
    
//     /**
//      * update
//      *
//      * @param  mixed $request
//      * @param  mixed $post
//      * @return void
//      */
//     public function update(Request $request, Santri $santris)
//     {
//         //define validation rules
//         $validator = Validator::make($request->all(), [
//             'nama' => 'required',
//             'gender' => 'required',
//             'status' => 'required',
//             'room' => 'required',
//             'divison' => 'required',
//             'gambar'     => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
//         ]);

//         //check if validation fails
//         if ($validator->fails()) {
//             return response()->json($validator->errors(), 422);
//         }

//         //check if image is not empty
//         if ($request->hasFile('image')) {

//             //upload image
//             $image = $request->file('image');
//             $image->storeAs('public/posts', $image->hashName());

//             //delete old image
//             Storage::delete('public/posts/'.$santris->image);

//             //update post with new image
//             $santris->update([
//                 'gambar'     => $image->hashName(),
//                 'nama'      => $request->nama,
//                 'gender'    => $request->gender,
//                 'status'    => $request->status,
//                 'room'      => $request->room,
//                 'divison'   => $request->division
//             ]);

//         } else {

//             //update post without image
//             $santris->update([
//                 'nama'      => $request->nama,
//                 'gender'    => $request->gender,
//                 'status'    => $request->status,
//                 'room'      => $request->room,
//                 'divison'   => $request->division
//             ]);
//         }

//         //return response
//         return new PostResource(true, 'Data Post Berhasil Diubah!', $santris);
//     }
    
//     /**
//      * destroy
//      *
//      * @param  mixed $post
//      * @return void
//      */
//     public function destroy(Post $santris)
//     {
//         //delete image
//         Storage::delete('public/posts/'.$santris->image);

//         //delete post
//         $santris->delete();

//         //return response
//         return new PostResource(true, 'Data Post Berhasil Dihapus!', null);
//     }
// }