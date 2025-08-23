import { MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddressPopupProps {
  address: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function AddressPopup({ address, isOpen, onClose }: AddressPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-grey mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Address</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-gray-700 leading-relaxed">{address}</p>
      </div>
    </div>
  );
}