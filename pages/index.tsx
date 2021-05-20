import Head from "next/head";
import React from "react";
import BasePage from "../components/Page/BasePage";
import PopupGroup from "../components/Popups/PopupGroup";
import Popup, { PopupLevel } from "../components/Popups/Popup";
import FieldsGroup from "../components/Field/FieldsGroup";
import InfoField from "../components/Field/InfoField";
import ArticleField from "../components/Field/ArticleField";
import AnnouncementsField from "../components/Field/AnnouncementsField";

export default function Home() {
  return (
    <>
      <Head>
        <title>SCHWEB | 首頁</title>
      </Head>
      <BasePage id="home">
        <FieldsGroup>
          <InfoField />
          <ArticleField />
          <AnnouncementsField />
        </FieldsGroup>
        <PopupGroup>
          <Popup level={PopupLevel.INFO}>
            網站還在架設。如有任何問題歡迎匯報給我們！
          </Popup>
        </PopupGroup>
      </BasePage>
    </>
  );
}
