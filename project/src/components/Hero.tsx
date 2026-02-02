import { Phone, MessageCircle } from 'lucide-react';

interface HeroProps {
  storeName: string;
  phoneNumber: string;
  whatsappNumber: string;
}

export default function Hero({ storeName, phoneNumber, whatsappNumber }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0tMiAwdjJoMnYtMmgtMnptLTIgMHYyaDJ2LTJoLTJ6bS0yIDB2Mmgydi0yaC0yem0tMiAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {storeName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Expert iPhone & Apple Device Repair
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Fast, reliable repairs by certified technicians. Same-day service available. Your trusted local Apple repair specialists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Chat on WhatsApp
            </a>

            <a
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="group bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
