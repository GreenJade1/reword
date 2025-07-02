'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Keyboard, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-green-400">Re-Imagine</span>
                  <br />
                  <span className="text-white">writing</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  We respect your privacy and time. We provide one of the most fastest ai writing assistant and fully private AI keyboard
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Try It
              </Button>
            </div>

            {/* Right Content - Mobile Mockups */}
            <div className="relative">
              <div className="flex justify-center items-center space-x-4 lg:space-x-8">
                {/* Phone 1 */}
                <div className="opacity-100 rotate-[14deg] will-change-transform absolute left-1 z-0 transform-3d-custom">
                  <Image height={200} width={200}  src="https://framerusercontent.com/images/yXP52qj2aBZTiEeeTu7OiOr5Ahg.jpg" alt="phone_1" className="rotate-5 rounded-xl" />
                </div>

                {/* Phone 2 */}
                <div className="opacity-100 rotate-[14deg] will-change-transform absolute left-40">
                  <Image height={200} width={200}  src="https://framerusercontent.com/images/ygUI8aviLM8Jw100bdDEoN0Hqk.jpg" alt="phone_1" className="rotate-5 rounded-xl" />
                </div>

                {/* Phone 3 */}
                <div className="opacity-100 rotate-[14deg] will-change-transform absolute left-60">
                  <Image height={200} width={200}  src="https://framerusercontent.com/images/WNbbpSxKlvqUtqfAQxqbWPh6rMo.jpg" alt="phone_1" className="rotate-5 rounded-xl" />
                </div>

                {/* Phone 4 */}
                <div className="opacity-100 rotate-[14deg] will-change-transform absolute left-80">
                  <Image height={200} width={200}  src="https://framerusercontent.com/images/SsAe3BVmLbUKRbVvsknF9OHH8I.jpg" alt="phone_1" className="rotate-5 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Try Rewordium Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              TRY <span className="text-green-400">REWORDIUM</span> NOW......
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Assistant Card */}
            <Card className="bg-gray-900 border-gray-800 hover:border-green-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-black" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">AI Assistant</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Smart and Fast real-time AI assistant to write / generate ideas, drafts and personal tuned messages
                    </p>
                  </div>
                  
                  {/* Demo interface */}
                  <div className="bg-black rounded-lg p-4 text-left">
                    <div className="text-green-400 text-xs mb-2">AI Assistant</div>
                    <div className="bg-gray-800 rounded p-2 text-white text-xs mb-3">
                      write me an email...
                    </div>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-500 text-white">
                      Generate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AI Keyboard Card */}
            <Card className="bg-gray-900 border-gray-800 hover:border-green-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mx-auto">
                    <Keyboard className="w-8 h-8 text-black" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">AI keyboard</h3>
                    <p className="text-gray-300 leading-relaxed">
                      A fully private iOS keyboard with AI features. We respect your privacy completely no data leaves on device themes
                    </p>
                  </div>
                  
                  {/* Demo keyboard */}
                  <div className="bg-black rounded-lg p-4">
                    <div className="grid grid-cols-10 gap-1 mb-3">
                      {'1234567890'.split('').map((char, i) => (
                        <div key={i} className="bg-gray-700 rounded text-white text-xs h-8 flex items-center justify-center">
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-10 gap-1 mb-3">
                      {'qwertyuiop'.split('').map((char, i) => (
                        <div key={i} className="bg-gray-700 rounded text-white text-xs h-8 flex items-center justify-center">
                          {char}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-9 gap-1">
                      {'asdfghjkl'.split('').map((char, i) => (
                        <div key={i} className="bg-gray-700 rounded text-white text-xs h-8 flex items-center justify-center">
                          {char}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Speed and Private Card */}
            <Card className="bg-gray-900 border-gray-800 hover:border-green-400 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Speed and Private</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Dynamic Usage FAST ⚡ and PRIVATE. Start your seamless Re-imagined writing now for free
                    </p>
                  </div>
                  
                  {/* Demo features */}
                  <div className="bg-black rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Speed</span>
                      <span className="text-green-400 font-bold">ULTRA FAST</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Privacy</span>
                      <span className="text-green-400 font-bold">100% SECURE</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">AI Features</span>
                      <span className="text-green-400 font-bold">ADVANCED</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}