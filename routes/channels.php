<?php

use App\Models\Conversation;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chat.{conversationId}', function ($user, $conversationId) {
    $conv = Conversation::with('client')->find($conversationId);
    if (!$conv || !$conv->client) return false;

    // Admin de la empresa puede escuchar todo
    if ($user->is_admin && $user->company_id == $conv->client->company_id) {
        return true;
    }

    // Usuario asignado a la conversación
    return $conv->user_id == $user->id;
});
