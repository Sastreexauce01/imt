<?php

namespace App\Http\Controllers;

use App\Mail\NewContact;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    
    public function index()
    {
        return Inertia::render('contact');
    }

    public function store(request $request)
    {

        $data = $request->validate([
            'surname' => 'required',
            'name' => 'required',
            'email' => 'required| email ',
            'tel' => 'required',
            'subject' => 'required',
            'content' => 'required'
        ]);


        // store

        Contact::create($data);


        // envoi de email 

        //  Mail::to($request->user())->send(new OrderShipped($order));

        Mail::to('sastreexauce01@gmail.com')->send(new NewContact($data));

        // admin et expediteur 

        return back()->with('success', 'Agradecemos a sua consulta; receberá uma resposta. ');

    }
}