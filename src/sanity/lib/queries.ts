export const homePageQuery = `*[_type == "homePage"][0]{
  title,
  subtitle,
  description
}`;

export const servicesQuery = `*[_type == "service"]{
  _id,
  title,
  description
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true] | order(_createdAt desc){
  _id,
  name,
  company,
  role,
  content,
  rating,
  "imageUrl": image.asset->url
}`;

export const projectsQuery = `*[_type == "project"]{
  _id,
  title,
  shortDescription,
  category,
  demoUrl,
  githubUrl,
  "imageUrl": mainImage.asset->url
}`;

export const aboutQuery = `*[_type == "about"][0]{
  title,
  subtitle,
  overview,
  mission,
  values,
  approachTitle,
  approachDescription,
  founderName,
  founderRole,
  founderImage
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc){
  _id,
  name,
  role,
  bio,
  skills,
  linkedin,
  email,
  "imageUrl": image.asset->url
}`;
