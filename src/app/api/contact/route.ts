import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    // Ici vous pouvez ajouter la logique pour envoyer l'email
    // Par exemple, utiliser un service comme SendGrid, Mailgun, etc.
    // Pour l'instant, on simule l'envoi

    console.log('Nouveau message de contact:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      message: 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
    });

  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
