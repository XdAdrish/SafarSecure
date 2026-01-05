import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      Landing
      <Link href="/login">
        <Button>Log in</Button>
      </Link>
      <Link href="/signup">
        <Button>Sign up</Button>
      </Link>
    </div>
  );
};

export default Page;
