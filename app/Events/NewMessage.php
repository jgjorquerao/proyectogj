<?php

namespace App\Events;

use App\Models\Whatsapp;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewMessage implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $tempId; // 👈 nuevo

    public function __construct(Whatsapp $message, $tempId = null)
    {
        $this->message = $message;
        $this->tempId = $tempId;
    }

    /* public function broadcastOn()
    {
        return new Channel('chat.' . $this->message->conversation_id); // Canal público
    } */

    public function broadcastOn()
    {
        \Log::info('Broadcasting on chat.' . $this->message->conversation_id);
        return new PrivateChannel('chat.' . $this->message->conversation_id);
    }


    public function broadcastWith()
    {
        return [
            'messages' => array_merge($this->message->toArray(), [
                'temp_id' => $this->tempId ?? null,
            ]),
        ];
    }


    public function broadcastAs()
    {
        return 'NewMessage';
    }
}
