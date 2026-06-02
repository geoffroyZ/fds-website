import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.INTERNAL_API_SECRET;
  if (!secret) {
    return false;
  }
  const header = request.headers.get('x-api-key');
  return header === secret;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const token = process.env.SANITY_AUTH_TOKEN;

  if (!projectId || !token) {
    return NextResponse.json(
      { error: 'Sanity write credentials not configured' },
      { status: 503 }
    );
  }

  const client = createClient({
    projectId,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-06',
    useCdn: false,
    token,
  });

  try {
    const body = await request.json();

    if (!body.name?.trim() || !body.content?.trim()) {
      return NextResponse.json(
        { error: 'name and content are required' },
        { status: 400 }
      );
    }

    const rating = parseInt(body.rating, 10);
    if (Number.isNaN(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    const result = await client.create({
      _type: 'testimonial',
      name: body.name.trim(),
      company: body.company?.trim() || undefined,
      role: body.role?.trim() || undefined,
      content: body.content.trim(),
      rating,
      featured: Boolean(body.featured),
    });

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
