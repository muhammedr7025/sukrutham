"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ThankYouContent() {
  const searchParams = useSearchParams()
  
  // Get data from URL parameters
  const donorName = searchParams.get('name') || "Anonymous Donor"
  const donationAmount = searchParams.get('amount') ? `₹${searchParams.get('amount')}` : "₹1000"
  const donorEmail = searchParams.get('email') || "donor@example.com"
  const transactionId = searchParams.get('transactionId') || "REF-123456789"
  const wantsCertificate = searchParams.get('wantsCertificate') === 'true'
  
  const collectedAmount = 25
  const targetAmount = 100

  return (
    <div className=" bg-gray-50 ">
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-6 overflow-scroll ">
        <div className="bg-white rounded-3xl shadow-lg p-12 max-w-7xl w-full mx-auto border border-gray-200 overflow-y-scroll">
          <div className="flex justify-center mb-1">
            <Image
              src="/images/Diversity Team Illustration.avif"
              alt="Community celebration"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
              Because of you, we are one step closer to
              <br />
              our goal of transforming Kerala. Thank you
              <br />
              for being a hero to our communities.
            </h2>
            <p className="text-gray-600 text-sm">
              Thank you, {donorName}! Your generosity is
              <br />
              creating a ripple effect of positive change in Kerala.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 font-medium">Donor Name:</span>
              <span className="text-gray-900 font-semibold">{donorName}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 font-medium">Payment Method:</span>
              <span className="text-gray-900 font-semibold">{donationAmount}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600 font-medium">Transaction ID:</span>
              <span className="text-gray-900 font-semibold">{transactionId}</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-gray-900 font-semibold mb-4">Donation Progress So Far</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-teal-600 font-medium">{collectedAmount} Cr Collected</span>
                  <span className="text-gray-600">Target: {targetAmount}Cr</span>
                </div>
                <Progress value={(collectedAmount / targetAmount) * 100} className="h-2" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium">
              Ask Others To Donate
            </Button>
            {wantsCertificate && (
              <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium">
                Download Certificate
              </Button>
            )}
          </div>

          <div className="text-center text-sm text-gray-600 space-y-2">
            <p>
              An instant success email has been shared with you at {donorEmail} with
              <br />
              the reference number {transactionId}
            </p>
            {wantsCertificate && (
              <p>
                80(G) Certificate: Your request for an 80(G) certificate has been received. You will
                <br />
                be contacted shortly for the necessary details.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  )
}
