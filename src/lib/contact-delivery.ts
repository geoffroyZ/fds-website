interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendContactViaResend({
  name,
  email,
  message,
}: ContactPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO || 'contact@fds.bf';
  const from =
    process.env.CONTACT_EMAIL_FROM || 'FDS Contact <onboarding@resend.dev>';

  if (!apiKey) {
    return false;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[FDS] Message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Resend error:', response.status, errorBody);
    return false;
  }

  return true;
}

export async function saveContactToSanity({
  name,
  email,
  message,
}: ContactPayload): Promise<boolean> {
  const token = process.env.SANITY_AUTH_TOKEN;
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

  if (!token || !projectId) {
    return false;
  }

  const response = await fetch(
    `https://${projectId}.api.sanity.io/v${process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-06'}/data/mutate/${dataset}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: 'contactSubmission',
              name,
              email,
              message,
              submittedAt: new Date().toISOString(),
            },
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Sanity contact save error:', response.status, errorBody);
    return false;
  }

  return true;
}

export function isContactDeliveryConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY ||
      (process.env.SANITY_AUTH_TOKEN && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
  );
}
