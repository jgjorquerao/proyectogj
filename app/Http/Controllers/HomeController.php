<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    
    public function send(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
            'subject' => 'required|string',
        ]);

        try {
            Mail::to('equipo@gyler.cl')->send(new ContactMessage($data));

            // Respuesta de éxito en formato JSON
            return response()->json([
                'success' => true,
                'message' => '¡Tu mensaje ha sido enviado con éxito!'
            ]);

        } catch (\Exception $e) {
            // Opcional: Guarda el error en los logs para depuración
            // \Log::error('Error al enviar correo: ' . $e->getMessage());

            // Respuesta de error en formato JSON
            return response()->json([
                'success' => false,
                'message' => 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
            ], 500);
        }
    }
}