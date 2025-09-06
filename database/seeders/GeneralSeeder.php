<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
        DB::table('companies')->insert([
            ['name' => 'TechCorp'],
            ['name' => 'Innova Solutions'],
            ['name' => 'Alpha Systems'],
            ['name' => 'GlobalSoft'],
            ['name' => 'NextGen Labs'],
        ]);

        User::factory(10)->create();

        // -----------------------------
        // Clients
        // -----------------------------
        DB::table('clients')->insert([
            [
                'name' => 'Cliente A',
                'rut' => '12345678-9',
                'phone' => '+56912345678',
                'company_id' => 1,
            ],
            [
                'name' => 'Cliente B',
                'rut' => '98765432-1',
                'phone' => '+56987654321',
                'company_id' => 1,
            ],
            [
                'name' => 'Cliente C',
                'rut' => '11111111-1',
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
                'rut' => '55555555-5',
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
                'brand' => 'Samsung',
                'model' => 'Galaxy S21',
                'year' => '2021',
                'price' => 800,
                'description' => 'Smartphone de gama alta',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'Apple',
                'model' => 'iPhone 13',
                'year' => '2021',
                'price' => 1000,
                'description' => 'Smartphone premium',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'Dell',
                'model' => 'XPS 13',
                'year' => '2022',
                'price' => 1200,
                'description' => 'Laptop ultraligera',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'Sony',
                'model' => 'WH-1000XM4',
                'year' => '2020',
                'price' => 350,
                'description' => 'Auriculares inalámbricos',
                'url_image' => null,
                'company_id' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'brand' => 'HP',
                'model' => 'Envy 15',
                'year' => '2022',
                'price' => 1100,
                'description' => 'Laptop de alto rendimiento',
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
