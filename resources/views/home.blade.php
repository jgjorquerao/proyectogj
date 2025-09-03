@extends('layouts.app')

@section('content')
    @include('header')
    {{-- Incluimos todas las secciones de la página --}}
    @include('hero')
    @include('about')
    @include('portfolio')
    @include('services')
    @include('pricing')
    @include('facts')
    @include('skills')
    @include('testimonials')
    @include('contact')
    @include('footer')
@endsection