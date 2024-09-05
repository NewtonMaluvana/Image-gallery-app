import { useFireStore } from "../hooks/useFireStore";
import { useAuth } from "../hooks/UserAuth";
import { Card } from "./Card";
export type Items = {
  N: string;
  Date: string;
};

export const Gallery = () => {
  const { Docs } = useFireStore("images");
  const { ...user } = useAuth();
  console.log(Docs);
  return (
    <div className=" flex flex-wrap h-full mt-10 gap-4 justify-start  items-center">
      {Docs.map((e) => (
        <Card
          Item={{
            Date: e.createAt.toLocaleDateString(),
            imgae: e.imageUrl,
            Name: e.userEmail,
          }}
        />
      ))}
    </div>
  );
};
