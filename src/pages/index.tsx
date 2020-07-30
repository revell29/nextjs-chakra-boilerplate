import React from "react";
import Head from "next/head";
import { Stack, SimpleGrid } from "@chakra-ui/core";
import { NextSeo } from "next-seo";

import { Headline, H1, Paragraph } from "../components/Typography";
import { SiteButton } from "../components/SiteButton";
import { MainLayout } from "../components/layout/MainLayout";
import { ButtonLink } from "../components/SiteLink";

const SectionStack = (props) => (
  <Stack spacing="2rem" width="100%" {...props} />
);

const GradientCard = (props) => (
  <SectionStack
    py="2rem"
    px="1rem"
    borderRadius="8px"
    border="#1a1a1a 1px solid"
    background="linear-gradient(#1a1a1a, #111 90%)"
    {...props}
  />
);

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Apsyadira</title>
      </Head>
      <NextSeo
        title="Apsyadira"
        description=" I'm a software developer who is passionate about making open-source
        more accessible. Some technologies I enjoy working with Typescript, React, Node.js and PHP. I am happy to
        learn about new technology and also working as software developer in
        vertilogic.com. I also have a team called digitaltech.id that helps
        people grow up their business. Making a website, mobile apps, and even
        IT consultant."
      />
      <GradientCard>
        <H1>Mohamad Apsyadira</H1>

        <Paragraph>
          I'm a software developer who is passionate about making open-source
          more accessible. Some technologies I enjoy working with Typescript,
          React, Node.js and PHP. I am happy to learn about new technology and
          also working as software developer in vertilogic.com. I also have a
          team called digitaltech.id that helps people grow up their business.
          Making a website, mobile apps, and even IT consultant.
        </Paragraph>
        <Paragraph>Currently available as a contractor/consultant.</Paragraph>
      </GradientCard>
    </MainLayout>
  );
};

export default Index;
