<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MeetingController;

Route::post('/panel/add_meeting', [MeetingController::class, 'addMeeting']);