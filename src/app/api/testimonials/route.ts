import { NextRequest, NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-04-06',
  useCdn: false, // Important: disable CDN for write operations
  token: process.env.SANITY_AUTH_TOKEN, // Server-side token with write permissions
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const testimonialData = {
      _type: 'testimonial',
      name: body.name,
      company: body.company || undefined,
      role: body.role || undefined,
      content: body.content,
      rating: parseInt(body.rating),
      featured: true, // New testimonials are featured by default
    };

    const result = await client.create(testimonialData);

    return NextResponse.json({ success: true, id: result._id });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}
