import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { savePersonalizedTopics } from "../../../ConfigurationStorage/Mods/topics";
import BaseTag from "../../Base/BaseTag";
import SetupUIStepsBase from "./Base";

const step = 1;
const title = "訂閱您有興趣的主題";
const availableTopics = [
  "校內公告",
  "升學消息",
  "競賽活動",
  "校園法規",
  "研習資訊",
  "專欄文章",
  "精選文章",
  "天氣資訊",
  "精選快報",
  "推薦連結",
];

export default function SetupUISelectTopicStep() {
  const router = useRouter();

  const [topic, setTopic] = useState<Record<string, boolean>>({});
  const setTopicStatus = (topicName: string, status: boolean) =>
    setTopic({
      ...topic,
      [topicName]: status,
    });
  const getTopicStatus = (topicName: string) => topic[topicName] ?? false;

  return (
    <SetupUIStepsBase
      step={step}
      title={title}
      onPrev={async () => router.push("./welcome")}
      onNext={async () => {
        savePersonalizedTopics(topic);
        await router.push("/");
      }}
    >
      <p className="pb-3">按一下即可訂閱。如要取消，再按一次即可。</p>
      <div className="flex flex-wrap">
        {availableTopics.map((t) => (
          <div className="mr-6 mb-2">
            <BaseTag
              status={getTopicStatus(t)}
              onOperated={(status) => setTopicStatus(t, status)}
            >
              {t}
            </BaseTag>
          </div>
        ))}
      </div>
    </SetupUIStepsBase>
  );
}
