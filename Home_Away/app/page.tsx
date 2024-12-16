import CategoryList from "@/components/home/CategoryList";
import PropertiesList from "@/components/home/PropertiesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
const HomePage = ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  console.log(searchParams.category);
  return (
    <section>
      <CategoryList
        category={searchParams.category}
        search={searchParams.search}
      />
      <PropertiesContainer
        category={searchParams.category}
        search={searchParams.search}
      />
    </section>
  );
};
export default HomePage;
