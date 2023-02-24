'use client';
import Header from '../components/header/Header';
import TopContainer from '@/components/topcontainer/TopContainer';
import Features from '@/components/features/Features';
import Highligthsection from '@/components/highlightsection/Highligthsection';
import { Box } from '@chakra-ui/react';
import CTA from '@/components/cta/CTA';
export default function Home() {
  return (
    <>
      <Header></Header>
      <Box as="main">
        <TopContainer></TopContainer>
        <Features></Features>
        <CTA></CTA>
        <Highligthsection></Highligthsection>
      </Box>
    </>
  );
}
