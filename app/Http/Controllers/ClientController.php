<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ClientController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getClients()
    {
        $creator = auth()->user();

        $clients = Client::where('company_id', $creator->company_id)
            ->orderBy('name', 'asc')
            ->get(['id', 'name']);

        return response()->json($clients);
    }
}
