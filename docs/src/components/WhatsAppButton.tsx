import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-600/50 transition-all duration-300 z-50 group animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
    </a>
  );
}
