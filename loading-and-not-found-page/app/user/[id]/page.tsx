import { notFound } from "next/navigation";

const Id = ({ params: { id } }: { params: { id: number } }) => {
  id = Number(id);

  if (id < 0 || id > 10 || isNaN(id)) {
    notFound();
  }
  return (
    <>
      <h1>Id:{id}</h1>
    </>
  );
};

export default Id;
