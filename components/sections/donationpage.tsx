"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DonationPage() {
  const [wantsCertificate, setWantsCertificate] = useState(false)
  const [amount, setAmount] = useState("1000")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [showTermsError, setShowTermsError] = useState(false)
  const router = useRouter()

  const handleAmountSelect = (value: string) => {
    setAmount(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!termsAccepted) {
      setShowTermsError(true)
      return
    }
    
    setShowTermsError(false)
    router.push("/thankyou")
  }

  return (
    <div className="min-h-screen lg:h-screen bg-background overflow-hidden ">
      {/* Main Content */}
      <div className="h-full flex flex-col lg:flex-row px-4 lg:px-16 lg:max-h-screen">
        {/* Left Column - Image Grid (Fixed on desktop, scrollable on mobile) */}
        <div className="w-full lg:w-1/2 p-3 lg:p-6 lg:overflow-hidden lg:h-full">
          <div className="space-y-2 lg:space-y-4 -mt-5 lg:-mt-10 lg:h-full lg:flex lg:flex-col lg:justify-center">
            <div className="space-y-0">
              {/* Row 1: Large image LEFT + 4 small images RIGHT */}
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-0 h-32 sm:h-48">
                {/* Left: Large image */}
                <div className="flex-1 rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/rectangle 6.jpg"
                    alt="rectangle 6"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-orange-400/60 mix-blend-soft-light"></div>
                </div>
                {/* Right: 2x2 grid of 4 images */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1 lg:gap-0 h-full">
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 11.jpg"
                      alt="rectangle 11"
                      width={900}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teal-500/50 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 12.jpg"
                      alt="rectangle 12"
                      width={900}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-600/40 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 13.jpg"
                      alt="rectangle 13"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-500/50 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 14.jpg"
                      alt="rectangle 14"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-amber-500/60 mix-blend-soft-light"></div>
                  </div>
                </div>
              </div>

              {/* Row 2: 4 small images LEFT + Large image RIGHT */}
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-0 h-32 sm:h-48">
                {/* Left: 2x2 grid of 4 images */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1 lg:gap-0 h-full">
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 11.jpg"
                      alt="rectangle 11"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teal-600/50 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 12.jpg"
                      alt="rectangle 12"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-orange-400/70 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 13.jpg"
                      alt="rectangle 13"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-500/60 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 14.jpg"
                      alt="rectangle 14"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-cyan-600/50 mix-blend-soft-light"></div>
                  </div>
                </div>
                {/* Right: Large image */}
                <div className="flex-1 rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/rectangle 15.jpg"
                    alt="rectangle 15"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-400/60 mix-blend-soft-light"></div>
                </div>
              </div>

              {/* Row 3: Large image LEFT + 4 small images RIGHT */}
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-0 h-32 sm:h-48">
                {/* Left: Large image */}
                <div className="flex-1 rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/rectangle 6.jpg"
                    alt="rectangle 6"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-orange-500/50 mix-blend-soft-light"></div>
                </div>
                {/* Right: 2x2 grid of 4 images */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1 lg:gap-0 h-full">
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 12.jpg"
                      alt="rectangle 12"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-orange-600/40 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 13.jpg"
                      alt="rectangle 13"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-pink-400/60 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 14.jpg"
                      alt="rectangle 14"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-600/50 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 15.jpg"
                      alt="rectangle 15"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teal-500/60 mix-blend-soft-light"></div>
                  </div>
                </div>
              </div>

              {/* Row 4: 4 small images LEFT + Large image RIGHT */}
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-0 h-32 sm:h-48">
                {/* Left: 2x2 grid of 4 images */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-1 lg:gap-0 h-full">
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 11.jpg"
                      alt="rectangle 11"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-orange-600/50 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 12.jpg"
                      alt="rectangle 12"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-pink-500/60 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 13.jpg"
                      alt="rectangle 13"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-500/40 mix-blend-soft-light"></div>
                  </div>
                  <div className="rounded-xl overflow-hidden relative">
                    <Image
                      src="/images/rectangle 14.jpg"
                      alt="rectangle 14"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-cyan-500/50 mix-blend-soft-light"></div>
                  </div>
                </div>
                {/* Right: Large image */}
                <div className="flex-1 rounded-xl overflow-hidden relative">
                  <Image
                    src="/images/rectangle 15.jpg"
                    alt="rectangle 15"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600/60 mix-blend-soft-light"></div>
                </div>
              </div>
             
            </div>
          </div>
        </div>

        {/* Right Column - Donation Form (Scrollable) */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full lg:overflow-y-auto lg:overflow-x-hidden p-3 lg:py-24 ">
          <div className="space-y-6 flex flex-col items-center justify-start lg:justify-center lg:min-h-full py-4 lg:py-0">
            <div className="text-center lg:text-left">
              <h1 className="text-xl lg:text-2xl font-bold mb-2">Become a Part of the Sukrutha Kerala Initiative</h1>
              <p className="text-muted-foreground text-sm lg:text-base">
                Your contribution will directly fuel our efforts to build a better future for Kerala. Please fill out
                this form to complete your donation and make an immediate impact.
              </p>
            </div>

            <form className="space-y-4 w-full lg:w-3/4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label className="text-sm font-medium mb-1 block">Full Name</label>
                <Input placeholder="Enter your full name" className="bg-gray-50" />
              </div>

              {/* Email ID */}
              <div>
                <label className="text-sm font-medium mb-1 block">Email ID</label>
                <Input type="email" placeholder="Enter your email ID" className="bg-gray-50 active:border-blue-500" />
              </div>

              {/* Contact Number */}
              <div>
                <label className="text-sm font-medium mb-1 block">Contact Number</label>
                <Input type="tel" placeholder="Enter your contact number" className="bg-gray-50" />
              </div>

              {/* Enter Amount */}
              <div>
                <label className="text-sm font-medium mb-1 block">Enter Amount (in ₹)</label>
                <Input
                  type="number"
                  placeholder="Enter donation amount"
                  className="bg-gray-50"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="flex gap-2 mt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="rounded-full px-4 py-1 text-sm bg-transparent"
                    onClick={() => handleAmountSelect("5000")}
                  >
                    ₹5,000
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="rounded-full px-4 py-1 text-sm bg-transparent"
                    onClick={() => handleAmountSelect("10000")}
                  >
                    ₹10,000
                  </Button>
                </div>
              </div>

              {/* 80G Certificate Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="certificate"
                  checked={wantsCertificate}
                  onCheckedChange={(checked) => setWantsCertificate(checked as boolean)}
                  className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                />
                <label htmlFor="certificate" className="text-sm">
                  I would like to receive 80(G) Certificate
                </label>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  wantsCertificate ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className={`space-y-4 transition-transform duration-500 ease-in-out ${
                    wantsCertificate ? "translate-y-0" : "-translate-y-4"
                  }`}
                >
                  {/* PAN Number */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">PAN number</label>
                    <Input placeholder="Enter PAN number" className="bg-gray-50" />
                  </div>

                  {/* Full Address */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">Full Address</label>
                    <Textarea placeholder="Enter your full address" className="bg-gray-50 min-h-[80px]" />
                  </div>

                  {/* City */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">City</label>
                    <Input placeholder="Enter city" className="bg-gray-50" />
                  </div>

                  {/* State */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">State</label>
                    <Input placeholder="Enter state" className="bg-gray-50" />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">Country</label>
                    <Input placeholder="Enter country" className="bg-gray-50" />
                  </div>

                  {/* PIN Code */}
                  <div>
                    <label className="text-sm font-medium mb-1 block">PIN Code</label>
                    <Input placeholder="Enter PIN code" className="bg-gray-50" />
                  </div>
                </div>
              </div>

              {/* Terms & Conditions Checkbox */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) => {
                      setTermsAccepted(checked as boolean)
                      if (checked) setShowTermsError(false)
                    }}
                    className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                  />
                  <label htmlFor="terms" className="text-sm">
                    Confirming Terms & Conditions
                  </label>
                </div>
                {showTermsError && (
                  <p className="text-red-500 text-sm">
                    Please accept the Terms & Conditions to proceed.
                  </p>
                )}
              </div>

              {/* Donate Button */}
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-base font-medium"
              >
                Donate Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
