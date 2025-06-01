'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
      <div className="text-center max-w-4xl px-4">
        <Navigation />
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/ali-profile.jpg"
            alt="Ali Rehman"
            fill
            className="rounded-full object-cover border-4 border-blue-500 shadow-xl"
            priority
          />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Ali Rehman</h1>
        <h2 className="text-2xl text-blue-600 mb-6">Product Manager</h2>
        <p className="text-xl text-gray-600">
          Turning Vision into Reality | Building Products People Love
        </p>
        <div className="mt-8">
          <Link 
            href="/experience" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-block"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 