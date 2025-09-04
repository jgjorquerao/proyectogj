<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PanelController;
use App\Http\Controllers\PasswordSetupController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MeetingController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

//Auth
Auth::routes();

//Gyler
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/contact', [HomeController::class, 'send'])->name('contact.send');
Route::get('/privacy_policies', [HomeController::class, 'privacy_policies'])->name('privacy_policies');

//Panel
Route::get('/panel', [PanelController::class, 'index'])->name('index');

//Chats
Route::get('/panel/chats', function() {
    return view('panel.chat')->with('menu', 'chat');
});
Route::get('/chat/get_chats', [ChatController::class, 'getChats']);
Route::post('/chat/send_message', [ChatController::class, 'sendMessage']);
Route::post('/chat/toggle_status/{conversation_id}', [ChatController::class, 'toggleControlStatus']);
Route::post('/chat/delete_message', [ChatController::class, 'deleteMessage'])->name('chat.delete');

//Clients
Route::get('/panel/get_clients', [ClientController::class, 'getClients']);

//Users
Route::get('/panel/users', function() {
    return view('panel.users')->with('menu', 'users');
});
Route::get('/panel/get_users', [UserController::class, 'getUsers']);
Route::get('/panel/get_users_for_meetings', [UserController::class, 'getUsersForMeetings']);

Route::post('panel/store_user', [UserController::class, 'store'])->name('users.store');

//Products
Route::get('/panel/products', function() {
    return view('panel.products')->with('menu', 'products');
});
Route::get('/panel/get_products', [ProductController::class, 'getProducts']);
Route::post('/panel/save_product', [ProductController::class, 'saveProduct'])->name('products.save');

//Meetings
Route::get('/panel/meetings', function() {
    return view('panel.meetings')->with('menu', 'meetings');
});
Route::get('/panel/get_meetings', [MeetingController::class, 'getMeetings']);
Route::post('/panel/add_meeting', [MeetingController::class, 'addMeeting']);
Route::post('/panel/edit_meeting', [MeetingController::class, 'editMeeting']);
Route::post('/panel/delete_meeting', [MeetingController::class, 'deleteMeeting']);

//Setup password
Route::get('/password/setup/{token}', [PasswordSetupController::class, 'showSetupForm'])->name('password.setup');
Route::post('/password/setup', [PasswordSetupController::class, 'setPassword'])->name('password.set');

//Ejecutar pusher desde n8n
Route::post('/whatsapp/trigger-event', [ChatController::class, 'triggerEvent'])
    ->withoutMiddleware([VerifyCsrfToken::class])
    ->withoutMiddleware('auth');