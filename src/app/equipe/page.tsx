import { client, isSanityConfigured } from '@/sanity/lib/client';
import { teamMembersQuery } from '@/sanity/lib/queries';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre Équipe | FDS - Full Digital Solution',
  description: 'Découvrez notre équipe d\'experts en développement web et solutions digitales au Burkina Faso.',
  keywords: 'équipe, développeurs, experts, FDS, Burkina Faso',
  openGraph: {
    title: 'Notre Équipe | FDS - Full Digital Solution',
    description: 'Découvrez notre équipe d\'experts en développement web et solutions digitales.',
    type: 'website',
  },
};

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image?: {
    asset: {
      url: string;
    };
  };
  imageUrl?: string;
  skills?: string[];
  linkedin?: string;
  email?: string;
}

async function getTeamMembers(): Promise<TeamMember[]> {
  if (!isSanityConfigured() || !client) {
    return [];
  }
  try {
    return await client.fetch(teamMembersQuery);
  } catch {
    return [];
  }
}

// Default team members when Sanity is not configured
const defaultTeamMembers = [
  {
    _id: '1',
    name: 'Abdoulaye ZERBO',
    role: 'Fondateur & Directeur Technique',
    bio: 'Expert en développement web et mobile avec plus de 10 ans d\'expérience. Passionné par les nouvelles technologies et l\'innovation digitale en Afrique.',
    skills: ['React', 'Node.js', 'TypeScript', 'Python'],
    linkedin: 'https://linkedin.com',
    email: 'abdoulaye@fds.bf',
    image: null,
  },
  {
    _id: '2',
    name: 'Marie SOME',
    role: 'Directrice Artistique',
    bio: 'Designer UI/UX talentueuse spécialisée dans la création d\'expériences utilisateur exceptionnelles.',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'UX Research'],
    linkedin: 'https://linkedin.com',
    email: 'marie@fds.bf',
    image: null,
  },
  {
    _id: '3',
    name: 'Jean Baptiste OUEDRAOGO',
    role: 'Développeur Full Stack',
    bio: 'Développeur passionné par la création d\'applications web performantes et scalables.',
    skills: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
    linkedin: 'https://linkedin.com',
    email: 'jb@fds.bf',
    image: null,
  },
  {
    _id: '4',
    name: 'Fatou SAWADOGO',
    role: 'Chef de Projet',
    bio: 'Experte en gestion de projets digitaux, elle assure le suivi et la livraison des projets dans les délais.',
    skills: ['Agile', 'Scrum', 'Jira', 'Gestion d\'équipe'],
    linkedin: 'https://linkedin.com',
    email: 'fatou@fds.bf',
    image: null,
  },
];

export default async function TeamPage() {
  const teamMembers = await getTeamMembers();
  const members = teamMembers.length > 0 ? teamMembers : defaultTeamMembers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Notre Équipe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              Des experts passionnés qui transforment vos idées en réalités digitales.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => {
            const avatarUrl =
              'imageUrl' in member && member.imageUrl
                ? member.imageUrl
                : member.image?.asset?.url;

            return (
            <div
              key={member._id}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/60 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                {avatarUrl ? (
                  <Image
                    src={`${avatarUrl}?w=400&h=400&fit=crop`}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl text-white/50">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>

                {/* Skills */}
                {member.skills && member.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-100 hover:bg-purple-100 text-gray-600 hover:text-purple-600 rounded-full transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Rejoignez notre équipe !
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nous sommes toujours à la recherche de talents exceptionnels pour rejoindre notre équipe.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Postuler maintenant
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

