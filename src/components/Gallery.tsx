import { useFireStore } from "../hooks/useFireStore";

import { Card } from "./Card";
export type Items = {
  N: string;
  Date: string;
};

export const Gallery = () => {
  const { Docs, isloading } = useFireStore("images");
  if (isloading) {
    return (
      <div className="py-20 px-20 flex">
        <div className="skeleton h-32 w-32"></div>
      </div>
    );
  }
  if (Docs.length == 0) {
    return (
      <div className="text-md md:text-5xl font-semibold text-blue-700 text-center py-28">
        Gallery empty ,please upload
      </div>
    );
  }
  return (
    <div className=" p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 h-full mt-10 gap-5 justify-center  items-center">
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
