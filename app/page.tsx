'use client';
import Header from '../components/header/Header';
import TopContainer from '@/components/topcontainer/TopContainer';
import Features from '@/components/features/Features';
import Highligthsection from '@/components/highlightsection/Highligthsection';
import { Box } from '@chakra-ui/react';
import CTA from '@/components/cta/CTA';
import Newsletter from '@/components/newsletter/Newsletter';
import FAQ from '@/components/faq/FAQ';
import Footer from '@/components/footer/Footer';
export default function Home() {
  return (
    <>
      <Box as="main">
        <TopContainer></TopContainer>
        <Features></Features>
        <CTA></CTA>
        <Highligthsection></Highligthsection>
        <Newsletter></Newsletter>
        <FAQ></FAQ>
        <Footer></Footer>
      </Box>
    </>
  );
}
