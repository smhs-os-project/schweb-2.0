import Head from "next/head";
import React from "react";
import Home from "..";
import SetupUI from "../../components/SetupUI";
import SetupUISelectTopicStep from "../../components/SetupUI/Steps/SelectTopic";

export default function WelcomeSetupPage() {
  return (
    <>
      <Head>
        <title>SCHWEB | 首頁</title>
      </Head>
      <SetupUI step={<SetupUISelectTopicStep />}>
        <Home />
      </SetupUI>
    </>
  );
}
