import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../Hooks/useGenres";
import platforms from "../data/platforms";
import usePlatforms from "../Hooks/usePlatforms";

interface Props {
  gaemQuery: GameQuery;
}

const GameHeading = ({ gaemQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gaemQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gaemQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
