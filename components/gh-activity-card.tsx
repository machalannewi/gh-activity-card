"use client";
import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

export default function GhActivityCard({ username }: { username: string }) {
  const [data, setData] = useState<null | []>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://github.10xdevlab.in/api/user/${username}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const finalData = await response.json();
        setData(finalData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border-2 border-white rounded-lg p-4">
      {data && data.length > 0 ? (
        <ActivityCalendar
          style={{ margin: "auto" }}
          data={data}
          colorScheme="dark"
          loading={loading}
          theme={{
            light: ["#EBEDF0", "#9BE9A7", "#6CC565", "#58A250", "#3A6E3A"],
            dark: ["#EBEDF0", "#9BE9A7", "#6CC565", "#58A250", "#3A6E3A"],
          }}
        />
      ) : null}
    </div>
  );
}
