import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-black min-h-screen text-white">
      <header className="bg-gray-900 text-white py-4">
        <h1 className="text-center text-4xl">Adeeb Ahmed</h1>
        <nav className="text-center mt-4">
          <ul className="flex justify-center space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Me</Link></li>
            <li><Link href="/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </header>
      <section className="mx-8 my-8 p-4 bg-white bg-opacity-10 rounded-md">
        <h2 className="text-2xl text-center mb-4">About Me</h2>
        <p>Hi, I'm Adeeb Ahmed, a computer science student at the City College of New York with a passion for software and technology. I have great experience in IT as well as knowledge in Cybersecurity. My most recent and notable role is currently at Verizon as a Network Engineer Intern.</p>
      </section>
      <footer className="text-center py-4 bg-gray-900">
        <p>&copy; 2024 Adeeb Ahmed. All rights reserved.</p>
      </footer>
    </div>
  );
}
