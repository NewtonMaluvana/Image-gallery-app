import { useAuth } from "../hooks/UserAuth";
import { Card } from "./Card";
export type Items = {
  N: string;
  Date: string;
};

export const Gallery = () => {
  const { ...user } = useAuth();
  return (
    <div>
      {[
        {
          Name: "Newton Maluvana",
          date: "2024/08/23",
        },
      ].map((e) => (
        <Card
          Item={{
            Name: e.Name,
            Date: e.date,
          }}
        />
      ))}
    </div>
  );
};
