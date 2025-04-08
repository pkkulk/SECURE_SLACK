// src/data/blog.ts (or data/blog.ts)
import { Blog } from '@/types/blog'; // Adjust path if needed

const blogs: Blog[] = [
  {
    id: 'intro-cybersecurity',
    title: 'Introduction to Cybersecurity Threats',
    category: 'Cybersecurity Fundamentals',
    summary: 'Learn about the common types of threats individuals and organizations face online.',
    date: '2024-08-15',
    image: '/images/cybersecurity-threats.jpg', // Example image path
    content: `
# Understanding Common Threats

Cybersecurity is crucial in today's digital world. Here are some common threats:

* **Malware:** Malicious software including viruses, ransomware, spyware.
* **Phishing:** Deceptive attempts to steal sensitive information.
* **Man-in-the-Middle (MitM) Attacks:** Intercepting communication between two parties.

Stay vigilant!
    `,
  },
  {
    id: 'password-security',
    title: 'Creating Strong & Unique Passwords',
    category: 'Best Practices',
    summary: 'Discover why strong passwords matter and how to manage them effectively.',
    date: '2024-08-10',
    // No image for this one
    content: `
# Password Power

Weak passwords are a major vulnerability. Follow these tips:

1.  **Length:** Aim for at least 12 characters.
2.  **Complexity:** Use uppercase, lowercase, numbers, and symbols.
3.  **Uniqueness:** Don't reuse passwords across different sites.
4.  **Password Managers:** Consider using one to generate and store complex passwords.

*Secure your accounts!*
    `,
  },
  // ... more blog posts
];

export default blogs;

// Helper function to simulate fetching (can be replaced with actual API call)
export const getBlogById = (id: string): Blog | undefined => {
    return blogs.find((b) => b.id === id);
}

export const getAllBlogs = (): Blog[] => {
    // You might want to sort by date here in a real application
    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}