import { Award, Clock, Shield, DollarSign, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experienced Apple Technicians',
    description: 'Our certified experts have years of experience with all Apple devices.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround Time',
    description: 'Most repairs completed within 30-60 minutes. Same-day service available.',
  },
  {
    icon: Shield,
    title: 'High-Quality Parts',
    description: 'We use only premium, tested components with warranty protection.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising on quality or service.',
  },
  {
    icon: CheckCircle2,
    title: 'Trusted Local Service',
    description: 'Family-owned business serving the community with integrity since day one.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for all Apple device repairs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
