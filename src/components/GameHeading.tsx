import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../Hooks/useGenre";
import usePlatform from "../Hooks/usePlatform";

interface Props {
  gaemQuery: GameQuery;
}

const GameHeading = ({ gaemQuery }: Props) => {
  const genre = useGenre(gaemQuery.genreId);

  const platform = usePlatform(gaemQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
