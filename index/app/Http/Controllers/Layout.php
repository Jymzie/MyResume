<?php

namespace App\Http\Controllers;

class Layout extends Controller
{
    public function index(){
        return view('layouts.app');
    }
}
