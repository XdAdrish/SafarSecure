import { Button } from "@/components/ui/button";
import HeroMapVec from "@/components/ui/svg/HeroMapVec";
import Navbar from "@/components/navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center p-10 border-t-2 border-b-2">
        <div className="flex flex-col gap-2 justify-start text-left">
          <h1 className="text-7xl font-bold">Safe Secure</h1>
          <p className="text-6xl font-bold text-foreground/50">
            Travle Safe, Stay Secure
          </p>
          <div className="flex gap-2 mt-5">
            <Button>Get Started</Button>
            <Button variant="outline">Admin Login</Button>
          </div>
        </div>

        <div className="flex justify-center items-center overflow-hidden aspect-square mask-[radial-gradient(circle,black_50%,transparent_70%)]">
          <HeroMapVec />
        </div>
      </div>
    </div>
  );
};

export default Page;
