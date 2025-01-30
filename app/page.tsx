'use client'

import { FloatingNav } from "@/components/ui/FloatingNavbar"
import { navItems } from "@/data"
import Approach from "@/layouts/Approach"
import Clients from "@/layouts/Clients"
import Experience from "@/layouts/Experience"
import Footer from "@/layouts/Footer"
import Grid from "@/layouts/Grid"
import Hero from "@/layouts/Hero"
import RecentProjects from "@/layouts/RecentProjects"

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default Home
