"use client";

import Modal from "./Modal";

export interface ValorData {
  title: string;
  items: string[];
}

interface ValorModalProps {
  isOpen: boolean;
  onClose: () => void;
  valor: ValorData | null;
}

export default function ValorModal({ isOpen, onClose, valor }: ValorModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm">
      {valor && (
        <div className="p-4 pt-10 sm:p-6 sm:pt-10">
          <h4 className="font-heading font-semibold text-base text-brand mb-4 pr-8">
            En personas que:
          </h4>
          <ul className="space-y-3 pl-1">
            {valor.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-base text-zinc-300 leading-snug">
                <svg className="flex-shrink-0 mt-0.5 text-brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Modal>
  );
}
