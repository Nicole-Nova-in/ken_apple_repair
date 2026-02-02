import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';

interface ContactProps {
  storeName: string;
  phoneNumber: string;
  whatsappNumber: string;
  location?: string;
}

export default function Contact({ storeName, phoneNumber, whatsappNumber, location }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit us today or reach out for a free quote
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <a
                  href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Phone</p>
                    <p className="text-lg font-semibold text-gray-900">{phoneNumber}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">WhatsApp</p>
                    <p className="text-lg font-semibold text-gray-900">{whatsappNumber}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 7:00 PM</p>
                    <p><span className="font-semibold">Saturday:</span> 10:00 AM - 6:00 PM</p>
                    <p><span className="font-semibold">Sunday:</span> 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden h-[400px] relative group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium text-lg mb-2">Find Us Here</p>
                <p className="text-gray-700 font-semibold max-w-xs">{location || "123 Main Street, Your City, State 12345"}</p>
                <p className="text-sm text-gray-400 mt-4">(Google Maps integration placeholder)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
