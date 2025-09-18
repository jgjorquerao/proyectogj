<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Configura tu contraseña</title>
    </head>
    <body>
        <h2>Hola {{ $user->name }},</h2>
        <p>Haz clic en el siguiente enlace para establecer tu contraseña de <strong>{{ config('app.name') }}</strong>:</p>
        <p><a href="{{ url('/password/setup/' . $token) }}">Configurar contraseña</a></p>
        <p>Este enlace expira en 60 minutos.</p>
    </body>
</html>
