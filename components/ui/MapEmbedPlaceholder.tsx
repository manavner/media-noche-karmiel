// TODO(PRD2): Replace with live Google Maps embed using real address
interface Props {
  address: string;
}

export function MapEmbedPlaceholder({ address }: Props) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
      <div className="h-64 flex flex-col items-center justify-center text-gray-400 gap-3">
        <div className="text-5xl">🗺️</div>
        <div className="text-center">
          <p className="font-medium text-gray-600 mb-1">📍 {address}</p>
          <p className="text-xs text-gray-400">
            {/* TODO(PRD2): הכנס Google Maps embed עם כתובת אמיתית */}
            מפה אינטראקטיבית תתווסף בקרוב
          </p>
        </div>
      </div>
    </div>
  );
}
