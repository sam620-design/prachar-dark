"use client"

import { useState } from "react"
import { Phone, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mb-4 flex flex-col gap-3"
          >
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all"
            >
              <Phone size={20} />
              <span className="sr-only">Call us</span>
            </a>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#22c35e] transition-all"
            >
              {/* WhatsApp SVG Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M17.507 14.307l-.009.075c-.266 1.678-1.464 3.049-3.064 3.604l-.173.064c-.434.151-.905.227-1.381.225-2.664 0-5.326-2.024-5.326-5.294 0-3.248 2.576-5.88 5.753-5.88 3.183 0 5.749 2.632 5.749 5.88 0 1.361-.538 2.673-1.499 3.656l-.01.01zm-5.503-10.307c-4.411 0-8 3.589-8 8 0 1.582.472 3.082 1.328 4.333l-1.328 4.667 4.667-1.328c1.251.856 2.751 1.328 4.333 1.328 4.411 0 8-3.589 8-8s-3.589-8-8-8zm0 14c-1.102 0-2.189-.22-3.207-.646l-.241-.103-2.552.728.728-2.552-.103-.241c-.426-1.018-.646-2.105-.646-3.207 0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6z" />
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg focus:outline-none"
      >
        {isOpen ? <X size={24} /> : <Phone size={24} />}
        <span className="sr-only">Contact options</span>
      </motion.button>
    </div>
  )
}