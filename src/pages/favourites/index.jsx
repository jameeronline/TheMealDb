import { useContext } from "react";

//shared components
import Empty from "src/components/common/Empty";
import Container from "src/components/shared/Container";

//page components
import MealList from "src/components/MealList";
import PageHeader from "src/components/PageHeader";

//Context
import { ThemeContext } from "src/context/ThemeContext";

export default function Favourites() {
  const { favourites } = useContext(ThemeContext);

  return (
    <>
      {favourites.length < 1 && <Empty />}
      {/* Meal Grid */}
      {favourites.length > 0 && (
        <>
          <PageHeader
            title="Favourite List"
            subtitle=""
            summary={`${favourites.length} meals found`}
          />
          <Container>
            <MealList meals={favourites} />
          </Container>
        </>
      )}
    </>
  );
}
