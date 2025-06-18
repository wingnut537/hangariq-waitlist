
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <img src="/logo.png" alt="HangarIQ Logo" className="w-48 mb-6" />
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Track, Fly, and Maintain. Safely.</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        HangarIQ is a modern SaaS built for real-world Part 91, 133, 135, and 137 operators. Join our early access list and help shape the future of aviation maintenance and compliance.
      </p>

      {!submitted ? (
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="w-full max-w-md space-y-4"
        >
          <input type="text" placeholder="Your Name" required className="border px-4 py-2 rounded w-full" />
          <input type="email" placeholder="Your Email" required className="border px-4 py-2 rounded w-full" />
          <input type="text" placeholder="Operator Type (e.g. Part 135)" className="border px-4 py-2 rounded w-full" />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Join the Waitlist
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold mt-4">Thank you! You're on the list.</p>
      )}

      <div className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} HangarIQ. All rights reserved.
      </div>
    </div>
  );
}
