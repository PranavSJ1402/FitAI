import { Check, Star } from "lucide-react";
import { useState } from "react";

// Pricing Section
const PricingSection = () => {
  const [hovered, setHovered] = useState(-1);

const pricingPlans = [
  {
    name: "Free Starter",
    price: "Free",
    description: "Experience the core AI fitness features for free",
    features: [
      "Personalized workout & meal plans",
      "Considers fitness level, dietary restrictions & injuries",
      "Up to 3 AI calls per plan",
      "Basic progress tracking",
      "Community support",
      "Limited plan modifications",
    ],
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "₹2,999 / 3 months",
    description: "Stay consistent with smart tools and enhanced guidance",
    features: [
      "10–15 AI calls per plan",
      "Flexible plan modifications",
      "Detailed nutrition tracking",
      "Custom meal recipe generator",
      "Progress analytics dashboard",
      "Workout & meal reminders",
      "Priority AI chat support",
      "Downloadable PDF reports",
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "₹4,999 / 6 months",
    description: "Achieve your long-term goals with expert-level insights and total AI support",
    features: [
      "50 AI calls per plan",
      "Unlimited plan changes & generation",
      "Video demo & AI-guided sessions",
      "Custom supplement suggestions",
      "Injury prevention & mobility analysis",
      "AI-generated weekly progress reports",
      "24/7 premium support",
      "Exclusive content library (videos, tools)",
      "Mental wellness & habit coaching",
    ],
    popular: false,
  },
];



  return (
    <div className="py-16 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-14 flex items-center justify-center gap-2">
          <Star className="w-6 h-6 text-primary" />
          Choose Your Plan
        </h2>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {pricingPlans.map((plan, index) => (
    <div
      key={index}
      className={`flex flex-col justify-between bg-card p-6 rounded-xl shadow-md transition-all duration-300 cursor-pointer transform relative ${
        hovered === index ? "scale-105 shadow-lg" : ""
      } ${plan.popular ? "ring-2 ring-primary" : ""}`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(-1)}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      {/* Top Content */}
      <div>
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {plan.name}
          </h3>
          <div className="text-3xl font-bold text-primary mb-2">
            {plan.price}
          </div>
          <p className="text-muted-foreground text-sm">{plan.description}</p>
        </div>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button (aligned at bottom always) */}
      <button
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors mt-auto ${
          plan.popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-muted text-foreground hover:bg-muted/80"
        }`}
      >
        Get Started
      </button>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default PricingSection;