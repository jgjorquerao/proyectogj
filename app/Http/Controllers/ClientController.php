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

    public function editClientName(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'name' => 'required|string|max:255',
        ]);

        $client = Client::find($request->id);
        if ($client) {
            $newName = $request->name;
            $isNew = $newName != $client->name;
            if ($isNew == true) {
                $client->name = $newName;
                $client->save();
            }

            return response()->json([
                'success' => true,
            ]);
        }
        else
        {
            return response()->json([
                'success' => false,
            ]);
        }
    }

    public function editClientRut(Request $request)
    {
        $request->validate([
            'id' => 'required|integer',
            'rut' => 'nullable|string|max:255',
        ]);

        $client = Client::find($request->id);
        if ($client) {
            $newRut = $request->rut;
            $isNew = $newRut != $client->rut;
            if ($isNew == true) {
                $client->rut = $newRut;
                $client->save();
            }

            return response()->json([
                'success' => true,
            ]);
        }
        else
        {
            return response()->json([
                'success' => false,
            ]);
        }
    }
}
