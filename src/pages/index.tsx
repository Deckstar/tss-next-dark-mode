import Head from "next/head";
import React from "react";

import HomeContent from "§/sections/home/HomeContent";

const Home = () => {
  return (
    <>
      <Head>
        <title>TSS and Next-Dark-Mode</title>
      </Head>

      <HomeContent />
    </>
  );
};

export default Home;
