import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950 text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20" // Set opacity to 50%
        >
          <source src="/smoke-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo and Text Section */}
          <div className="md:w-1/2 lg:w-2/5 space-y-4 md:pr-8">
            <Link href="/" className="block h-20"> {/* Fixed height for logo container */}
              <Image
                src="/logo2.jpg?height=100&width=400" // Increased logo size
                alt="Prachar Logo"
                width={400} // Increased width
                height={100} // Increased height
                className="h-20 w-40" // Ensure logo fits within the container
              />
            </Link>
            <p className="text-gray-400 mt-2">
              Elevating brands through innovative digital marketing strategies that drive results.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Golden Partition Line */}
          <div className="hidden md:block h-40 w-px bg-amber-500 mx-8"></div>

          {/* Contact Us Section */}
          <div className="md:w-1/2 lg:w-2/5 space-y-4 md:pl-8">
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                <span className="text-gray-400">123 Marketing Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-orange-500 shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-orange-500 shrink-0" size={18} />
                <span className="text-gray-400">info@prachar.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-amber-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Prachar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-orange-500 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-orange-500 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}