import { NextRequest, NextResponse } from 'next/server';
import {
  isContactDeliveryConfigured,
  saveContactToSanity,
  sendContactViaResend,
} from '@/lib/contact-delivery';

const MAX_MESSAGE_LENGTH = 5000;
const MAX_NAME_LENGTH = 200;

export async function POST(request: NextRequest) {
  try {
    if (!isContactDeliveryConfigured()) {
      return NextResponse.json(
        {
          error:
            'Le formulaire de contact n\'est pas encore configuré. Contactez-nous à contact@fds.bf.',
        },
        { status: 503 }
      );
    }

    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: 'Message trop long' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    const sentByEmail = await sendContactViaResend(payload);
    const savedToSanity = sentByEmail ? false : await saveContactToSanity(payload);

    if (!sentByEmail && !savedToSanity) {
      return NextResponse.json(
        { error: 'Impossible d\'envoyer votre message pour le moment. Réessayez plus tard.' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message:
        'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.',
    });
  } catch (error) {
    console.error('Erreur lors du traitement du formulaire de contact:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
