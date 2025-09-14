<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MeetingController;

//Meetings
Route::post('/meeting/want_meeting', [MeetingController::class, 'wantMeeting']);
Route::post('/meeting/check_availability', [MeetingController::class, 'checkAvailability']);
Route::post('/meeting/add_meeting_n8n', [MeetingController::class, 'addMeetingN8n']);