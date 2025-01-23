import React from "react";
import {
  Utensils,
  Home,
  Mountain,
  Tent,
  SwissFranc as Swim,
  Camera,
} from "lucide-react";

const plans = [
  {
    title: "Culinary Delights",
    icon: Utensils,
    price: "$299",
    duration: "per person / day",
    description:
      "Experience local cuisine with expert chefs, food tours, and cooking classes.",
    features: [
      "3 gourmet meals daily",
      "Wine tasting sessions",
      "Local market tours",
      "Cooking workshops",
      "Private chef experiences",
    ],
    color: "blue",
  },
  {
    title: "Luxury Stays",
    icon: Home,
    price: "$499",
    duration: "per person / day",
    description:
      "Premium accommodations with breathtaking views and world-class amenities.",
    features: [
      "5-star resorts",
      "Ocean view rooms",
      "Spa access",
      "24/7 concierge",
      "Private balcony",
    ],
    color: "purple",
  },
  {
    title: "Adventure Package",
    icon: Mountain,
    price: "$399",
    duration: "per person / day",
    description:
      "Thrilling activities and guided adventures for the bold explorer.",
    features: [
      "Guided hiking",
      "Rock climbing",
      "White water rafting",
      "Mountain biking",
      "Zip lining",
    ],
    color: "green",
  },
  {
    title: "Wilderness Camping",
    icon: Tent,
    price: "$199",
    duration: "per person / day",
    description: "Immersive camping experience in pristine natural locations.",
    features: [
      "Luxury camping gear",
      "Campfire dinners",
      "Stargazing sessions",
      "Nature guides",
      "Wildlife viewing",
    ],
    color: "orange",
  },
  {
    title: "Water Adventures",
    icon: Swim,
    price: "$349",
    duration: "per person / day",
    description: "Exciting water-based activities and beachfront experiences.",
    features: [
      "Snorkeling trips",
      "Sunset sailing",
      "Jet ski tours",
      "Beach yoga",
      "Private beach access",
    ],
    color: "cyan",
  },
  {
    title: "Photography Tours",
    icon: Camera,
    price: "$279",
    duration: "per person / day",
    description:
      "Capture stunning moments with professional photography guides.",
    features: [
      "Pro camera gear",
      "Photography workshops",
      "Scenic locations",
      "Editing sessions",
      "Photo book creation",
    ],
    color: "pink",
  },
];

function TripPlans() {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
      purple: "bg-purple-50 border-purple-200 hover:border-purple-300",
      green: "bg-green-50 border-green-200 hover:border-green-300",
      orange: "bg-orange-50 border-orange-200 hover:border-orange-300",
      cyan: "bg-cyan-50 border-cyan-200 hover:border-cyan-300",
      pink: "bg-pink-50 border-pink-200 hover:border-pink-300",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Adventure
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our carefully curated travel packages designed to create
            unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl border-2 ${getColorClasses(
                plan.color
              )} p-6 transition-all duration-300 hover:shadow-xl cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <plan.icon className={`h-6 w-6 text-${plan.color}-600`} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {plan.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-2 text-gray-600">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 text-white bg-${plan.color}-600 hover:bg-${plan.color}-700 rounded-lg transition-colors duration-200`}
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TripPlans;
