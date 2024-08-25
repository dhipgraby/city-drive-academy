"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bike, Book, Calendar, Car, CheckCircle, MapPin, Phone, Star, Users } from "lucide-react"

export default function Main() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6" />
            <span className="font-bold">CityDrive Academy</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Courses
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About Us
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Testimonials
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact Us
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Book a Course
            </Link>
          </nav>
          <Button className="ml-4" variant="default">
            Enroll Now
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{backgroundImage: 'url("/hero.webp")'}}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Master the Road with Confidence
              </h1>
              <p className="mx-auto max-w-[700px] text-lg sm:text-xl">
                Get certified with the best driving school in Munich. From standard licenses to advanced skills, we prepare you for the road ahead.
              </p>
              <div className="space-x-4">
                <Button size="lg" variant="default">
                  Book Your Course Today
                </Button>
                <Button size="lg" className="bg-black" variant="ghost">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose CityDrive Academy?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { icon: Users, text: "Learn from certified experts with years of experience." },
                { icon: Book, text: "Courses designed to cover all aspects of safe driving." },
                { icon: Calendar, text: "Classes available at times that fit your busy schedule." },
                { icon: Car, text: "Train with the latest models to ensure you're road-ready." },
                { icon: CheckCircle, text: "Over 95% of our students pass their exams on the first attempt." },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <item.icon className="h-12 w-12 mb-4" />
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Courses Offered
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Standard Driving License (Class B)", icon: Car },
                { title: "Motorcycle License (Class A)", icon: Bike },
                { title: "Advanced Driving Skills", icon: CheckCircle },
                { title: "Fleet Driver Training", icon: Users },
                { title: "First Aid and Road Safety", icon: Star },
              ].map((course, index) => (
                <Card key={index}>
                  <CardHeader>
                    <course.icon className="h-8 w-8 mb-2" />
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Brief description of the course...</p>
                  </CardContent>
                  <CardFooter>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                      Learn More
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg">View All Courses</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Choose Your Course", description: "Select the course that fits your needs." },
                { step: 2, title: "Book and Schedule", description: "Easy online booking with flexible scheduling options." },
                { step: 3, title: "Learn and Train", description: "Receive expert instruction in both classroom and on-the-road settings." },
                { step: 4, title: "Get Certified", description: "Pass your test and receive your verified driving certificate." },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg">Start Your Journey</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Anna", age: 22, quote: "CityDrive Academy gave me the confidence to ace my driving test on the first try!" },
                { name: "Max", age: 35, quote: "The instructors were incredibly patient and knowledgeable. Highly recommend!" },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center text-center pt-6">                   
                    <p className="italic mb-2">"{testimonial.quote}"</p>
                    <p className="font-semibold">
                      {testimonial.name}, {testimonial.age}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg">Read More Reviews</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Your License, Secure and Verified
                </h2>
                <p className="text-lg mb-4">
                  We issue digital, tamper-proof certificates that you can easily share with employers and insurers. Powered by Dock.io, your credentials are safe and globally verifiable.
                </p>
                <Button size="lg">Learn About Our Digital Credentials</Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/license.webp"
                  alt="Digital License"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              About Us
            </h2>
            <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
              Founded in 2008, CityDrive Academy is dedicated to providing top-tier driving education in Munich. Our mission is to create confident, responsible drivers who are prepared for all road conditions.
            </p>          
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Ready to Start?
              </h2>
              <p className="text-lg mb-8 max-w-[600px]">
                Join the thousands of students who have successfully earned their licenses with us.
              </p>
              <div className="space-x-4">
                <Button size="lg" variant="secondary">
                  Book Your Course
                </Button>
                <Button size="lg" className="bg-black" variant="ghost">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">Courses</Link></li>
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
                <li><Link href="#" className="hover:underline">FAQs</Link></li>
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <address className="not-italic">
                <p>CityDrive Academy</p>
                <p>Main Street, Munich, Germany</p>
                <p className="flex items-center mt-2">
                  <Phone className="h-4 w-4 mr-2" />
                  +49 123 456 7890
                </p>
                <p className="flex items-center mt-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  info@citydriveacademy.de
                </p>
              </address>
            </div>
          
            <div>
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="mb-2">Subscribe to our newsletter for updates and offers.</p>
              <form className="flex space-x-2">
                <Input type="email" placeholder="Your email" className="max-w-[200px] bg-gray-700 text-white" />
                <Button type="submit" variant="secondary">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} CityDrive Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}