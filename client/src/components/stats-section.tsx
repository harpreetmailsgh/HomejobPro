import { Users, CheckCircle, Star, Shield } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "10,000+",
    label: "Happy Customers",
    description: "Satisfied homeowners nationwide",
    icon: Users,
    color: "text-blue-600"
  },
  {
    id: 2, 
    value: "15,000+",
    label: "Jobs Completed",
    description: "Successfully finished projects",
    icon: CheckCircle,
    color: "text-green-600"
  },
  {
    id: 3,
    value: "4.8/5",
    label: "Average Rating",
    description: "Consistently high quality service",
    icon: Star,
    color: "text-yellow-500"
  },
  {
    id: 4,
    value: "100%",
    label: "Verified Pros",
    description: "Licensed and background checked",
    icon: Shield,
    color: "text-orange-600"
  }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-grey-50 to-blue-grey-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600">Join the growing community of satisfied homeowners</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.id} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</p>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}