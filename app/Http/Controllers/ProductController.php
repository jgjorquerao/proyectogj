<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function getProducts()
    {
        $creator = Auth::user();

        $products = Product::where('company_id', $creator->company_id)
            ->orderBy('created_at', 'asc')
            ->get(['id', 'brand', 'model', 'year', 'price', 'url_image', 'url_original_image', 'croppie_viewport', 'croppie_points', 'croppie_zoom', 'croppie_orientation']);

        return response()->json($products);
    }

    public function saveProduct(Request $request)
    {
        $data = $request->only(['brand', 'model', 'year', 'price', 'description']);

        // Obtener el product-id si viene, sino null
        $productId = $request->input('product_id', null);

        // Validación básica
        $request->validate([
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'year' => 'required|integer',
            'price' => 'required|numeric',
            'description' => 'nullable|string|max:1000',
        ]);

        // Guardar o actualizar producto
        $product = $productId ? Product::find($productId) : new Product();
        $product->brand = $data['brand'];
        $product->model = $data['model'];
        $product->year = $data['year'];
        $product->price = $data['price'];
        $product->description = $data['description'] ?? null;
        $product->company_id = Auth::user()->company_id;

        // Manejar imagen cropeada
        if ($request->has('image')) {
            // Si existe una imagen anterior, la eliminamos
            if ($productId && $product->url_image && Storage::disk('public')->exists($product->url_image)) {
                Storage::disk('public')->delete($product->url_image);
            }

            $imageData = $request->input('image');
            $imageParts = explode(',', $imageData);
            $imageBase64 = end($imageParts);
            $imageDecoded = base64_decode($imageBase64);

            $filename = 'products/' . uniqid() . '.webp';
            Storage::disk('public')->put($filename, $imageDecoded);

            $product->url_image = $filename;
            $product->croppie_points = $request->input('croppie_points');
            $product->croppie_zoom = $request->input('croppie_zoom');
            $product->croppie_viewport = $request->input('croppie_viewport');
            $product->croppie_orientation = $request->input('croppie_orientation', 0);
        }

        // Manejar imagen original (si viene)
        if ($request->has('original_image')) {
            // Si existe una imagen original anterior, la eliminamos
            if ($productId && $product->url_original_image && Storage::disk('public')->exists($product->url_original_image)) {
                Storage::disk('public')->delete($product->url_original_image);
            }
            $originalData = $request->input('original_image');
            $originalParts = explode(',', $originalData);
            $originalBase64 = end($originalParts);
            $originalDecoded = base64_decode($originalBase64);

            $originalFilename = 'products/originals/' . uniqid() . '.webp';
            Storage::disk('public')->put($originalFilename, $originalDecoded);

            $product->url_original_image = $originalFilename;
        }

        $product->save();

        return response()->json([
            'success' => true,
            'product' => $product,
        ]);
    }
}
