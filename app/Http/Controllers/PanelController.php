<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PanelController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $defaultMenu = "products";
        return view('panel.index')->with('menu', $defaultMenu);
    }
}
