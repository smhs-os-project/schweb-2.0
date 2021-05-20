import Head from "next/head";
import React from "react";
import Home from "..";
import SetupUI from "../../components/SetupUI";
import SetupUIWelcomeStep from "../../components/SetupUI/Steps/Welcome";

export default function WelcomeSetupPage() {
  return (
    <>
      <Head>
        <title>SCHWEB | 首頁</title>
      </Head>
      <SetupUI step={<SetupUIWelcomeStep />}>
        <Home />
      </SetupUI>
    </>
  );
}
