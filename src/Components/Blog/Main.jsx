
import PropAnatomy from "./propAnatomy";

const Main = ({searchResults}) => {
  const results = searchResults.map((anatomy) => (
    <PropAnatomy key={anatomy.id} anatomy={anatomy} />
  ));
  const content = results? (
    results
  ) : (
    <article>
      <p className="">جستوجویی یافت نشد</p>
    </article>
  );
  return (
    <>
      <div className="w-full flex gap-5  lg:items-start   lg:flex-row      mt-10   lg:flex justify-center items-center flex-col ">
        <main className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 my-10">{content}</main>
      </div>
    </>
  );
};

export default Main;
