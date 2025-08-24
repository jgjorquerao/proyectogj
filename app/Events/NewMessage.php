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

    public function __construct(Whatsapp $message)
    {
        $this->message = $message;
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
        // Fetch all messages for the conversation
        return [
            'messages' => $this->message, // Pass the messages as an array
        ];
    }

    public function broadcastAs()
    {
        return 'NewMessage';
    }
}
