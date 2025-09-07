<!DOCTYPE html>

<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Mensaje</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #121212;
            color: #e0e0e0;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #1f1f1f;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
            border: 1px solid #333;
        }

        .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #333;
            margin-bottom: 20px;
        }

        .header h1 {
            color: #bb86fc;
            margin: 0;
            font-size: 24px;
        }

        .content {
            line-height: 1.6;
        }

        .content p {
            margin-bottom: 15px;
        }

        .details strong {
            color: #03dac6;
        }

        .message-box {
            background-color: #2c2c2c;
            border-left: 4px solid #03dac6;
            padding: 15px;
            margin-top: 15px;
            border-radius: 4px;
        }

        .message-box p {
            margin: 0;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #333;
            font-size: 12px;
            color: #777;
        }

        .social-links a {
            color: #03dac6;
            text-decoration: none;
            margin: 0 10px;
            font-size: 14px;
        }

        @media only screen and (max-width: 600px) {
            .container {
                margin: 10px;
                padding: 15px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            {{-- Cambia la URL en src por la de tu logo --}}
            <img src="https://gyler.cl/img/gylerai004.png" alt="{{ config('app.name') }} Logo" style="display: block; margin: 0 auto 20px auto; max-width: 150px;">
            <h1>Nuevo Mensaje</h1>
        </div>
        <div class="content">
            <p>Has recibido un nuevo mensaje desde <strong>{{ config('app.name') }}</strong>.</p>
            <div class="details">
                <p><strong>Nombre:</strong> {{ $data['name'] }}</p>
                <p><strong>Email:</strong> {{ $data['email'] }}</p>
                <p><strong>Asunto:</strong> {{ $data['subject'] }}</p>
            </div>
            <p><strong>Mensaje:</strong></p>
            <div class="message-box">
                <p>{{ $data['message'] }}</p>
            </div>
        </div>
        <div class="footer">

            <p>&copy; {{ date('Y') }} {{ config('app.name') }}. Todos los derechos reservados.</p>
        </div>
    </div>
</body>

</html>