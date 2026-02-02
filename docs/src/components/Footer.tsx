import { Phone, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  storeName: string;
  phoneNumber: string;
}

export default function Footer({ storeName, phoneNumber }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{storeName}</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted local experts for iPhone and Apple device repairs. Quality service, honest pricing.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                {phoneNumber}
              </a>
              <a href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {storeName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
