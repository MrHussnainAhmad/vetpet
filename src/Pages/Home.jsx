// pages/Home.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import RecentCases from '../Components/RecentCases';
import Footer from '../Components/Footer';
import ServiceHighlights from '../Components/ServiceHighlights';
import LocationContact from '../Components/Location&Contact';
import WhyUs from '../Components/WhyUs';
import CTA from '../Components/CTA';

const Home = () => {

  const recentCases = [
    {
      id: 1,
      pet: 'Max',
      breed: 'Golden Retriever',
      age: 3,
      owner: 'Sarah Johnson',
      condition: 'Hip Dysplasia',
      treatment: 'Physical Therapy & Medication',
      status: 'in-treatment',
      progress: 65,
      image: 'https://cdn.qwenlm.ai/output/d3045ac8-42a3-4a32-8b19-8d68b582f7b3/t2i/dc1c5688-9493-4c0c-9aa0-ac2141f22279/0281b0e6-253f-4784-a9b6-74f5306e1264.png'
    },
    {
      id: 2,
      pet: 'Luna',
      breed: 'Persian Cat',
      age: 5,
      owner: 'Michael Chen',
      condition: 'Chronic Kidney Disease',
      treatment: 'Special Diet & Fluid Therapy',
      status: 'completed',
      progress: 100,
      image: 'https://cdn.qwenlm.ai/output/d3045ac8-42a3-4a32-8b19-8d68b582f7b3/t2i/8b2a4283-ee6c-4502-a66c-b1bec470b881/33ab1179-9a77-4dc3-9d6a-f3db17c7028c.png'
    },
    {
      id: 3,
      pet: 'Rio',
      breed: 'African Grey Parrot',
      age: 15,
      owner: 'Emma Wilson',
      condition: 'Feather Plucking',
      treatment: 'Environmental Enrichment Program',
      status: 'in-treatment',
      progress: 40,
      image: 'https://cdn.qwenlm.ai/output/d3045ac8-42a3-4a32-8b19-8d68b582f7b3/t2i/49fbaa00-bda3-48db-86ac-944a1eb0db1a/b4cfdfa0-1ce1-4192-9154-d92672afb42e.png'
    }
  ];

  return (
    <div className="home-container">
      <Navbar />
      <main>
        <Hero />
        <CTA />
        <RecentCases cases={recentCases} />
        <ServiceHighlights />
        <LocationContact />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
