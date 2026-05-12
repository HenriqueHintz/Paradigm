export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  type: 'client' | 'employee';
}

export const testimonials: Testimonial[] = [
  { quote: "Paradigm has been a partner for many years. We have worked together on many successful projects and look forward to our continuing partnership.", author: "John R. Connelly Jr.", company: "UBS Realty Investors", type: "client" },
  { quote: "The people at Paradigm stand out for their integrity, practicality, commitment and responsibility—all ingredients of successful professionals.", author: "Guy Steuart", company: "Steuart Investment Company", type: "client" },
  { quote: "Paradigm is a company that understands what end users' needs and desires are. They are a conscientious group that strives for excellence.", author: "Nate Dunn", company: "MRP Realty", type: "client" },
  { quote: "They promote from within. I moved from leasing to assistant to manager at a decent clip. Amazing colleagues and VPs.", author: "Former Property Manager", company: "Paradigm Management", type: "employee" },
  { quote: "Great place to start out straight out of college. Amazing people, great training, great environment.", author: "Leasing Associate", company: "Paradigm Management", type: "employee" },
  { quote: "Paradigm is a company committed to its employees. An environment where I can apply my knowledge.", author: "Service Technician", company: "Paradigm Management", type: "employee" },
];

export const clientTestimonials = testimonials.filter(t => t.type === 'client');
export const employeeTestimonials = testimonials.filter(t => t.type === 'employee');
