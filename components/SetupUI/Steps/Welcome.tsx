import { useRouter } from "next/dist/client/router";
import React from "react";
import ConfigurationStorage from "../../../ConfigurationStorage";
import SetupUIStepsBase from "./Base";

const title = "歡迎使用 Schweb！";

export default function SetupUIWelcomeStep() {
  const router = useRouter();
  const store = () => ConfigurationStorage.set("initiated", "true");

  return (
    <SetupUIStepsBase
      title={title}
      onSkip={async () => {
        store();
        await router.push("/");
      }}
      onNext={async () => {
        store();
        await router.push("./select-topic");
      }}
    >
      我們立志建立一個極其方便，為您打造的學校與新聞平台。
      在開始之前，您需要先自訂一些東西。按下您有興趣的功能，讓我們開始打造屬於您的
      Schweb 吧！
    </SetupUIStepsBase>
  );
}
