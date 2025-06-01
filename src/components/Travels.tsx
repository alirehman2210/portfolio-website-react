'use client';

import React from 'react';
import Image from 'next/image';

interface TravelSpot {
  location: string;
  country: string;
  year: number;
  description: string;
  folder: string;
  highlights: string[];
}

const Travels = () => {
  const travels: TravelSpot[] = [
    {
      location: "French Riviera",
      country: "France/Monaco",
      year: 2025,
      description: "Exploring the glamorous coastal cities of Nice, Cannes, and Monaco along the Mediterranean coast. A journey through luxury, culture, and stunning landscapes of the Côte d'Azur.",
      folder: "/travels/2025/french-riviera",
      highlights: [
        "Experienced the blend of luxury and Mediterranean culture in Nice",
        "Walked the famous Croisette in Cannes",
        "Explored the opulent principality of Monaco",
        "Enjoyed the stunning coastal views of the French Riviera",
        "Visited historic landmarks and cultural sites"
      ]
    },
    // Add more travel experiences for 2024 and 2023
  ];

  const travelsByYear = travels.reduce((acc, travel) => {
    if (!acc[travel.year]) {
      acc[travel.year] = [];
    }
    acc[travel.year].push(travel);
    return acc;
  }, {} as Record<number, TravelSpot[]>);

  const years = Object.keys(travelsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="py-20 bg-white" id="travels">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Travel Experiences</h2>
        <p className="text-center text-gray-600 mb-12">Exploring cultures and gathering perspectives around the world</p>

        {years.map((year) => (
          <div key={year} className="mb-20">
            <h3 className="text-3xl font-bold text-blue-600 mb-8 text-center">{year}</h3>
            <div className="space-y-12">
              {travelsByYear[year].map((spot, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="p-8">
                    <div className="flex flex-col mb-6">
                      <h3 className="text-2xl font-semibold text-gray-800">{spot.location}, {spot.country}</h3>
                      <p className="text-gray-700 mt-4 leading-relaxed">{spot.description}</p>
                    </div>
                    
                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[
                        'WhatsApp Image 2025-05-28 at 4.46.44 PM.jpeg',
                        'WhatsApp Image 2025-05-28 at 4.46.44 PM (1).jpeg',
                        'WhatsApp Image 2025-05-28 at 4.46.44 PM (2).jpeg',
                        'WhatsApp Image 2025-05-28 at 4.46.44 PM (3).jpeg',
                        'WhatsApp Image 2025-05-28 at 4.46.44 PM (4).jpeg',
                        'WhatsApp Image 2025-05-28 at 4.46.44 PM (5).jpeg'
                      ].map((imageName, num) => (
                        <div key={num} className="relative h-64 group overflow-hidden rounded-lg">
                          <Image
                            src={`${spot.folder}/${imageName}`}
                            alt={`${spot.location} photo ${num + 1}`}
                            fill
                            className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Trip Highlights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {spot.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Travels; 