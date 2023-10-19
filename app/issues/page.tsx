import { Button } from "@radix-ui/themes";
import React from "react";
import NewIssuePage from "./new/page";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
