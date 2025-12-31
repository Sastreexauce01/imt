{{-- ========================================
    EMAIL 1: NOUVEAU MESSAGE DE CONTACT
======================================== --}}

@component('mail::message')

{{-- En-tête avec icône --}}
<div style="text-align: center; margin-bottom: 30px;">
    <div style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 50%; margin-bottom: 15px;">
        <span style="font-size: 40px;">📬</span>
    </div>
    <h1 style="color: #2d3748; font-size: 28px; font-weight: bold; margin: 0;">Nouveau Message Reçu</h1>
    <p style="color: #718096; margin-top: 8px;">Un utilisateur souhaite vous contacter</p>
</div>

{{-- Carte informations contact --}}
@component('mail::panel')
<table style="width: 100%; border-collapse: collapse;">
    <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #4a5568;">👤 Nom complet</strong>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
            <span style="color: #2d3748;">{{ $data['surname'] }} {{ $data['name'] }}</span>
        </td>
    </tr>
    <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #4a5568;">📧 Email</strong>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
            <a href="mailto:{{ $data['email'] }}" style="color: #667eea;">{{ $data['email'] }}</a>
        </td>
    </tr>
    <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
            <strong style="color: #4a5568;">📱 Téléphone</strong>
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; text-align: right;">
            <a href="tel:{{ $data['tel'] }}" style="color: #667eea;">{{ $data['tel'] }}</a>
        </td>
    </tr>
    <tr>
        <td style="padding: 12px 0;">
            <strong style="color: #4a5568;">🏷️ Sujet</strong>
        </td>
        <td style="padding: 12px 0; text-align: right;">
            <span style="background: #edf2f7; color: #2d3748; padding: 4px 12px; border-radius: 12px; font-size: 14px;">{{ $data['subject'] }}</span>
        </td>
    </tr>
</table>
@endcomponent

{{-- Section Message --}}
<div style="margin: 30px 0;">
    <h3 style="color: #2d3748; font-size: 18px; margin-bottom: 15px; display: flex; align-items: center;">
        💬 Message
    </h3>
    <div style="background: #f7fafc; border-left: 4px solid #667eea; padding: 20px; border-radius: 8px; color: #2d3748; line-height: 1.6;">
        {{ $data['content'] }}
    </div>
</div>

{{-- Bouton d'action --}}
@component('mail::button', ['url' => config('app.url') . '/dashboard/contact', 'color' => 'primary'])
🚀 Accéder au Dashboard
@endcomponent

<div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
    <p style="color: #a0aec0; font-size: 14px; margin: 0;">
        Cordialement,<br>
        <strong style="color: #2d3748;">{{ config('app.name') }}</strong>
    </p>
</div>

@endcomponent
