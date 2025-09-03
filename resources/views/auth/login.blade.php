@extends('layouts.app')

@include('header_short')

@section('content')
<div class="container d-flex justify-content-center mt-5">
    <div class="row w-100 justify-content-center">
        <div class="col-md-8 col-lg-5">
            <div class="card card-custom p-4">
                <div class="text-center card-header-custom">
                    <h1 class="h3 fw-bold text-white">{{ __('Iniciar Sesión') }}</h1>
                </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="mb-3">
                            <label for="email" class="form-label form-label-custom">{{ __('Correo Electrónico') }}</label>
                            <input id="email" type="email" class="form-control form-control-custom @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email"  required autofocus>
                            @error('email')
                            <div class="invalid-feedback d-block" role="alert">
                                <strong>{{ $message }}</strong>
                            </div>
                            @enderror
                        </div>

                        <div class="mb-4">
                            <label for="password" class="form-label form-label-custom">{{ __('Contraseña') }}</label>
                            <input id="password" type="password" class="form-control form-control-custom @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
                            @error('password')
                            <div class="invalid-feedback d-block" role="alert">
                                <strong>{{ $message }}</strong>
                            </div>
                            @enderror
                        </div>

                        <div class="d-flex justify-content-between align-items-center mb-4">
                            <div class="form-check">
                                <input class="form-check-input form-check-input-custom" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="form-check-label text-white-50" for="remember">
                                    {{ __('Recuérdame') }}
                                </label>
                            </div>
                            @if (Route::has('password.request'))
                            <a class="btn btn-link btn-link-custom fw-medium" href="{{ route('password.request') }}">
                                {{ __('¿Olvidaste tu contraseña?') }}
                            </a>
                            @endif
                        </div>

                        <div class="d-grid mb-3">
                            <button type="submit" class="btn btn-custom btn-lg">
                                {{ __('Ingresar') }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> -->
@endsection