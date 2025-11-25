import React, { useState } from "react";

export default function DemoModal({
  images,
  onClose,
}: {
  images: string[];
  onClose: () => void;
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-neutral-800 rounded-2xl shadow-2xl p-4 max-w-5xl w-full h-[85vh]">
        {/* Botão fechar */}
        <div className="flex justify-end mb-3">
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white text-xl transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex gap-4 h-[calc(100%-3rem)]">
          <div className="flex flex-col gap-3 overflow-y-auto pr-2 w-28 flex-shrink-0">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelected(index)}
                className={`w-24 h-24 rounded-lg cursor-pointer object-cover border-2 transition-all
                  ${
                    selected === index
                      ? "border-purple-500 opacity-100 scale-105"
                      : "border-transparent opacity-60 hover:opacity-90 hover:border-neutral-600"
                  }`}
              />
            ))}
          </div>

          <div className="flex-1 flex items-center justify-center bg-neutral-900/50 rounded-xl overflow-hidden">
            <img
              src={images[selected]}
              alt={`Demo ${selected + 1}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
