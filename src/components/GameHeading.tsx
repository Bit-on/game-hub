import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gaemQuery: GameQuery;
}

const GameHeading = ({ gaemQuery }: Props) => {
  const heading = `${gaemQuery.platform?.name || ""} ${
    gaemQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
