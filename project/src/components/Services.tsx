import { Smartphone, Battery, Usb, Camera, Lock, Wrench, Tablet } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'iPhone Screen Replacement',
    description: 'Cracked or shattered screen? We use premium quality displays with same-day replacement available.',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    description: 'Restore your device\'s battery life with genuine, high-capacity replacements. Quick 30-minute service.',
  },
   {
    icon: Tablet, 
    title: 'Back Glass Replacement',
    description: 'Repair or replace the back glass of your device with high-quality parts. Fast and safe service.',
  },
   {
    icon: Usb,
    title: 'Charging Port Repair',
    description: 'Fix charging issues, repair loose connections, and replace damaged charging ports.',

  },
  {
    icon: Camera,
    title: 'Camera & Speaker Repair',
    description: 'Restore crystal-clear photos and audio. We repair or replace all camera and speaker components.',
  },
  {
    icon: Lock,
    title: 'Software Issues & Unlocking',
    description: 'Software troubleshooting, iOS updates, carrier unlocking, and activation services.',
  },
  {
    icon: Wrench,
    title: 'Accessories & General Repairs',
    description: 'From buttons to logic boards, we handle all repairs. Plus quality accessories in stock.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive repair solutions for all your Apple devices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
            >
              <div className="bg-white group-hover:bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
