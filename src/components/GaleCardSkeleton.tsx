import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GaleCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GaleCardSkeleton;
