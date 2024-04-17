"use client";
import React from "react";

const TopTime = () => {
  const [isClient, setIsClient] = React.useState(false);
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    setIsClient(true);

    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="p-4">
      {isClient && (
        <table>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>{time.toLocaleString("en-CA")}</td>
            <td>{Intl.DateTimeFormat().resolvedOptions().timeZone}</td>
          </tr>
          <tr>
            <td>
              {time.toLocaleString("en-CA", {
                timeZone: "UTC",
              })}
            </td>
            <td>UTC</td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default TopTime;
