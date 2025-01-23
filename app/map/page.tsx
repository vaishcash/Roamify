"use client";


import React, { useState } from "react";
import {
  Search,
  Calendar,
  MapPin,
  Compass,
  Globe,
  Users,
  Clock,
  Star,
  Plane,
} from "lucide-react";

function App() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searching for:", destination);
    console.log("Date range:", startDate, "to", endDate);
  };

  const destinations = [
    {
      title: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Discover the stunning white architecture and breathtaking sunsets of Santorini.",
    },
    {
      title: "Machu Picchu, Peru",
      image:
        "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Explore the ancient Incan citadel set high in the Andes Mountains.",
    },
    {
      title: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Experience the timeless beauty of traditional Japanese culture and temples.",
    },
    {
      title: "Great Barrier Reef, Australia",
      image:
        "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Dive into the world's largest coral reef system teeming with marine life.",
    },
    {
      title: "Petra, Jordan",
      image:
        "https://images.unsplash.com/photo-1563177978-4c5ebf35e37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Walk through the ancient rose-colored city carved into desert cliffs.",
    },
    {
      title: "Northern Lights, Iceland",
      image:
        "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description:
        "Witness the magical aurora borealis dance across the Arctic sky.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-8">
      <div className="flex items-center space-x-2">
        <MapPin className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-semibold text-gray-900">Travel Planner</h1>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Panel */}
          <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6 space-y-6">
            {/* Search Input */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400"
              >
                <span className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                  {startDate && endDate
                    ? `${startDate} - ${endDate}`
                    : "Select dates"}
                </span>
              </button>
            </div>

            {/* Calendar Picker */}
            {isCalendarOpen && (
              <div className="bg-white rounded-lg border border-gray-200 p-4 space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={() => setIsCalendarOpen(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Done
                </button>
              </div>
            )}

            <button
              onClick={handleSearch}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Map Area */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
            {" "}
            <div className=" bg-gray-100 relative">
              {/* Placeholder Map UI */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345097385!2d-122.41941568468127!3d37.77492927975867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858154d0b0f223%3A0x4d82c9c64a3ab52!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1611773374129!5m2!1sen!2sin"
                width="600"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full max-w-[60rem] h-64 rounded-lg shadow-md"
              ></iframe>

              {/* Map Controls */}
              <div className="absolute right-4 top-4 flex flex-col space-y-2">
                <button className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50">
                  <span className="text-2xl">+</span>
                </button>
                <button className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50">
                  <span className="text-2xl">−</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-12 bg-white rounded-lg shadow-md">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Travel With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the world with our expert guidance and seamless travel
              planning experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Global Coverage</h3>
              <p className="text-gray-600">Access to destinations worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Best Experiences</h3>
              <p className="text-gray-600">Curated travel experiences</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Seamless reservation process</p>
            </div>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of the world's most breathtaking locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-semibold text-xl">
                    {destination.title}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">{destination.description}</p>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                    Learn more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;