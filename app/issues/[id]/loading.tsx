import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Heading, Flex, Card, Box } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssuePage = () => {
  return (
    <Box className="mx-5">
      <Skeleton width="10rem" />
      <Flex gap="3" my="2">
        <Skeleton width="4rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Card>
    </Box>
  );
};

export default LoadingIssuePage;
