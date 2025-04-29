import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header/Navigation */}
      <header className="w-full py-6 px-8 md:px-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image 
            src="/favicon.ico" 
            alt="VideoSaaS Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <span className="font-bold text-xl md:text-2xl">VideoSaaS</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#features" className="hover:text-blue-400 transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</Link>
          <Link href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</Link>
        </nav>
        <div className="flex gap-4">
          <Link 
            href="/sign-in" 
            className="px-4 py-2 rounded-md border border-white/20 hover:bg-white/10 transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/sign-up" 
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Professional Video Hosting <span className="text-blue-400">Made Simple</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
          Stream, manage, and analyze your videos with our powerful platform designed for creators and businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            href="/sign-up" 
            className="px-8 py-4 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Start Free Trial
          </Link>
          <Link 
            href="/home" 
            className="px-8 py-4 rounded-md border border-white/20 hover:bg-white/10 transition-colors text-lg font-medium"
          >
            View Dashboard
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Powerful Video Management Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">HD Video Streaming</h3>
            <p className="text-gray-400">Deliver high-quality video content to your audience with adaptive streaming technology.</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Advanced Analytics</h3>
            <p className="text-gray-400">Track viewer engagement and gain insights with comprehensive analytics tools.</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Secure Content</h3>
            <p className="text-gray-400">Protect your videos with advanced security features and content protection.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your video experience?</h2>
          <p className="text-xl text-gray-200 mb-10">Join thousands of content creators who trust our platform.</p>
          <Link 
            href="/sign-up" 
            className="px-8 py-4 rounded-md bg-white text-blue-900 hover:bg-gray-100 transition-colors text-lg font-medium"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 md:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/favicon.ico" 
                alt="VideoSaaS Logo" 
                width={30} 
                height={30} 
                className="rounded-md"
              />
              <span className="font-bold text-lg">VideoSaaS</span>
            </div>
            <p className="text-gray-400">Professional video hosting and management for businesses and creators.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-gray-400 text-center">
          <p>© {new Date().getFullYear()} VideoSaaS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}