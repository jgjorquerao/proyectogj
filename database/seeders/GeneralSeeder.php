<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Company;

class GeneralSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // -----------------------------
        // Companies
        // -----------------------------

        Company::create(['name' => 'TechCorp']);
        Company::create(['name' => 'Innova Solutions']);
        Company::create(['name' => 'Alpha Systems']);
        Company::create(['name' => 'GlobalSoft']);
        Company::create(['name' => 'NextGen Labs']);


        User::factory(10)->create();

        // -----------------------------
        // Clients
        // -----------------------------
        DB::table('clients')->insert([
            [
                'name' => 'Cliente A',
                'rut' => '8774094-3',
                'phone' => '+56912345678',
                'company_id' => 1,
            ],
            [
                'name' => 'Cliente B',
                'rut' => '15542327-7',
                'phone' => '+56987654321',
                'company_id' => 1,
            ],
            [
                'name' => 'Cliente C',
                'rut' => '23673354-8',
                'phone' => '+56911111111',
                'company_id' => 1,
            ],
            [
                'name' => 'Cliente D',
                'rut' => null,
                'phone' => '+56922222222',
                'company_id' => 1,
            ],
            [
                'name' => 'Cliente E',
                'rut' => '1799543-K',
                'phone' => '+56933333333',
                'company_id' => 1,
            ],
        ]);

        // -----------------------------
        // Products
        // -----------------------------
        // Asumimos que las company_id van del 1 al 5
        DB::table('products')->insert([
            [
                'brand' => 'Toyota',
                'model' => 'Corolla',
                'year' => '2021',
                'price' => 14500,
                'description' => 'Sedán compacto, económico y confiable',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'Hyundai',
                'model' => 'Tucson',
                'year' => '2022',
                'price' => 22000,
                'description' => 'SUV moderno, amplio y eficiente en consumo',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'Chevrolet',
                'model' => 'Spark GT',
                'year' => '2020',
                'price' => 7800,
                'description' => 'Hatchback ideal para ciudad, bajo consumo',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'Ford',
                'model' => 'Ranger',
                'year' => '2023',
                'price' => 28000,
                'description' => 'Camioneta robusta, ideal para trabajo y carga',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'Kia',
                'model' => 'Rio',
                'year' => '2021',
                'price' => 12500,
                'description' => 'Sedán versátil, cómodo y accesible',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // -----------------------------
        // Conversations
        // -----------------------------
        // Suponiendo que existen users con id 1-3 y clients con id 1-5
        DB::table('conversations')->insert([
            ['user_id' => 1, 'client_id' => 1, 'control_status' => 1],
            ['user_id' => 2, 'client_id' => 2, 'control_status' => 0],
            ['user_id' => 3, 'client_id' => 3, 'control_status' => 1],
            ['user_id' => null, 'client_id' => 4, 'control_status' => 1],
            ['user_id' => 1, 'client_id' => 5, 'control_status' => 0],
        ]);

        // -----------------------------
        // Whatsapp messages
        // -----------------------------
        // Suponiendo que las conversation_id van del 1 al 5
        DB::table('whatsapp')->insert([
            [
                'message' => 'Hola, necesito información del producto.',
                'currentdate' => now(),
                'client_message' => 1,
                'processed' => 0,
                'conversation_id' => 1,
                'wa_message_id' => Str::uuid(),
            ],
            [
                'message' => 'Claro, ¿qué modelo te interesa?',
                'currentdate' => now(),
                'client_message' => 0,
                'processed' => 1,
                'conversation_id' => 1,
                'wa_message_id' => Str::uuid(),
            ],
            [
                'message' => 'Quiero comprar el iPhone 13.',
                'currentdate' => now(),
                'client_message' => 1,
                'processed' => 0,
                'conversation_id' => 2,
                'wa_message_id' => Str::uuid(),
            ],
            [
                'message' => 'Perfecto, lo tenemos en stock.',
                'currentdate' => now(),
                'client_message' => 0,
                'processed' => 1,
                'conversation_id' => 2,
                'wa_message_id' => Str::uuid(),
            ],
            [
                'message' => 'Gracias!',
                'currentdate' => now(),
                'client_message' => 1,
                'processed' => 0,
                'conversation_id' => 3,
                'wa_message_id' => Str::uuid(),
            ],
        ]);

        // -----------------------------
        // Schedules
        // -----------------------------
        $days = [
            0, // Lunes
            1, // Martes
            2, // Miércoles
            3, // Jueves
            4, // Viernes
            5, // Sábado
            6, // Domingo
        ];

        foreach ($days as $day) {
            DB::table('schedules')->insert([
                'day' => $day,
                'start_hour' => '08:00:00',
                'end_hour' => '20:00:00',
                'enabled' => 1,
                'company_id' => 1,
            ]);
        }
    }
}
