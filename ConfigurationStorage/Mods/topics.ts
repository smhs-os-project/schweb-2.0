import ConfigurationStorage from "..";

export type Topic = Record<string, boolean | undefined>;

export function savePersonalizedTopics(topic: Topic) {
  ConfigurationStorage.setObject("PersonalizedTopic", topic);
}

export function loadPersonalizedTopics(): Topic | null {
  return ConfigurationStorage.getObject<Topic>("PersonalizedTopic");
}
