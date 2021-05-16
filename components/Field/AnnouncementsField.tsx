import React from "react";
import { AnnouncementCategoryMetadata } from "../../common/AnnouncementCategory";
import Card from "../Base/BaseCard";
import Field from "./Field";
import type { AnnouncementCategory } from "../../common/AnnouncementCategory";

export default function AnnouncementsField() {
  return (
    <div>
      <Field title="公告">
        {Object.keys(AnnouncementCategoryMetadata).map(
          (category: AnnouncementCategory) => {
            return (
              <Card
                href={`/announcement/${category}`}
                key={`${category}-announcements`}
                flexRow
                justifyBetween
              >
                {AnnouncementCategoryMetadata[category].type}
              </Card>
            );
          }
        )}
      </Field>
    </div>
  );
}
