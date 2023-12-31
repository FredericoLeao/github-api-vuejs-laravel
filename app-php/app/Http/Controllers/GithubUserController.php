<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class GithubUserController extends Controller
{
    public function store(Request $request)
    {
        $githubUserLogin = $request->login;
        $githubUserResponse = Http::get("https://api.github.com/users/$githubUserLogin");
        if ($githubUserResponse->successful()) {
            $githubUserData = $githubUserResponse->json();
            $filename = $githubUserData['login'].".json";
            Storage::disk('jsondb')->put($filename, json_encode($githubUserResponse->json()));
            return response()->json(['error' => 0], 200);
        }
        if ($githubUserResponse->status()) {
            return response()->json(['error' => 1], $githubUserResponse->status());
        }
        return response()->json(['error' => 2], 400);
    }
}
