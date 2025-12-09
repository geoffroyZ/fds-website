'use client';

import { useState, useRef } from 'react';
import { client } from '@/sanity/lib/client';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [testimonialStatus, setTestimonialStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const testimonialFormRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mldqloez', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleTestimonialSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTestimonialStatus('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const testimonialData = {
        name: formData.get('testimonial-name') as string,
        company: formData.get('testimonial-company') as string || undefined,
        role: formData.get('testimonial-role') as string || undefined,
        content: formData.get('testimonial-content') as string,
        rating: parseInt(formData.get('testimonial-rating') as string),
      };

      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testimonialData),
      });

      if (response.ok) {
        setTestimonialStatus('success');
        testimonialFormRef.current?.reset();
      } else {
        console.error('API error:', response.status, response.statusText);
        setTestimonialStatus('error');
      }
    } catch (err) {
      console.error('Error submitting testimonial:', err);
      setTestimonialStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6 max-w-4xl mx-auto pt-0">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Contactez-nous
        </h1>
        <p className="text-xl text-gray-700">Nous sommes là pour vous aider</p>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Partagez votre expérience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Votre avis compte ! Partagez votre expérience avec nos services et aidez d'autres clients à nous découvrir.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {testimonialStatus === 'success' ? (
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-8 rounded-3xl shadow-xl text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Merci pour votre témoignage !</h3>
              <p>Nous l'examinerons et le publierons bientôt sur notre site.</p>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
              <form ref={testimonialFormRef} onSubmit={handleTestimonialSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="testimonial-name" className="block text-gray-800 font-semibold mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="testimonial-name"
                      name="testimonial-name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="testimonial-company" className="block text-gray-800 font-semibold mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="testimonial-company"
                      name="testimonial-company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="testimonial-role" className="block text-gray-800 font-semibold mb-2">
                      Poste
                    </label>
                    <input
                      type="text"
                      id="testimonial-role"
                      name="testimonial-role"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre poste"
                    />
                  </div>

                  <div>
                    <label htmlFor="testimonial-rating" className="block text-gray-800 font-semibold mb-2">
                      Note (1-5) *
                    </label>
                    <select
                      id="testimonial-rating"
                      name="testimonial-rating"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Choisir une note</option>
                      <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                      <option value="4">⭐⭐⭐⭐ Très bien</option>
                      <option value="3">⭐⭐⭐ Bien</option>
                      <option value="2">⭐⭐ Satisfaisant</option>
                      <option value="1">⭐ À améliorer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="testimonial-content" className="block text-gray-800 font-semibold mb-2">
                    Votre témoignage *
                  </label>
                  <textarea
                    id="testimonial-content"
                    name="testimonial-content"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Partagez votre expérience avec nos services..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={testimonialStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {testimonialStatus === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer mon témoignage'
                  )}
                </button>

                {testimonialStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">⚠️</span>
                      <span>Une erreur est survenue. Veuillez r&eacute;essayer.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contactez-nous</h3>
          {status === 'success' ? (
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-8 rounded-3xl shadow-xl text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
              <p>Nous vous répondrons très vite.</p>
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">⚠️</span>
                      <span>Une erreur est survenue. Veuillez r&eacute;essayer.</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de contact</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                  <p className="text-gray-600">+226 XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">contact@fds.bf</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                  <p className="text-gray-600">Ouagadougou, Burkina Faso</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <h4 className="font-semibold text-gray-800 mb-2">Horaires d'ouverture</h4>
              <p className="text-gray-600 text-sm">
                Lundi - Vendredi: 8h00 - 18h00<br />
                Samedi: 9h00 - 12h00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
