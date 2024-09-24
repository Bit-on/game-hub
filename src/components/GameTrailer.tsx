import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const vidSource = data?.results[0];
  if (isLoading) return null;
  if (error) throw error;
  return vidSource ? (
    <video src={vidSource.data[480]} poster={vidSource?.preview} controls />
  ) : null;
};

export default GameTrailer;
