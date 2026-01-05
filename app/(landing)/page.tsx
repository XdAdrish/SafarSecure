import { Button } from "@/components/ui/button";
import HeroMapVec from "@/components/svg/HeroMapVec";
import Navbar from "@/components/navbar";
import {
  IconShieldCheck,
  IconRocket,
  IconWorld,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Navbar />
      <section className="border-b border-foreground/20">
        <div className="flex justify-between items-center max-w-5xl mx-auto py-15">
          <div className="flex flex-col gap-2 justify-start text-left">
            <h1 className="text-7xl font-bold">Safe Secure</h1>
            <p className="text-6xl font-bold text-foreground/50">
              Travle Safe, Stay Secure
            </p>
            <div className="flex gap-2 mt-5">
              <Link href="/signup">
                <Button size={"lg"}>Get Started</Button>
              </Link>
              <Button size={"lg"} variant="outline">
                Admin Login
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center overflow-hidden aspect-square mask-[radial-gradient(circle,black_50%,transparent_70%)] scale-90">
            <HeroMapVec />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto border-l border-b border-foreground/20">
        {[
          {
            title: "Top-Tier Security",
            description:
              "Your data is protected with state-of-the-art encryption standards.",
            icon: <IconShieldCheck className="w-full h-full" />,
          },
          {
            title: "Lightning Fast",
            description:
              "Experience blazing fast performance with our optimized infrastructure.",
            icon: <IconRocket className="w-full h-full" />,
          },
          {
            title: "Global Reach",
            description:
              "Access our services from anywhere in the world without restrictions.",
            icon: <IconWorld className="w-full h-full" />,
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 justify-between  p-10 text-card-foreground border-e border-foreground/20 min-h-100"
          >
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                <span className="size-6">{feature.icon}</span> {feature.title}
              </h3>
              <p className="text-foreground/40 font-medium">
                {feature.description}
              </p>
            </div>
            <div className="size-50 text-primary w-full flex justify-center">
              {feature.icon}
            </div>
          </div>
        ))}
      </section>
      <section className="max-w-5xl min-h-100 mx-auto py-24 px-10 flex flex-col justify-center items-center text-center gap-8 border-x bg-radial from-50% to-primary/30">
        <h2 className="text-4xl font-bold">Ready to Secure Your Journey?</h2>
        <p className="text-xl font-semibold text-muted-foreground max-w-2xl">
          Schedule a discovery call with our security experts to learn how we
          can help you stay safe and secure worldwide.
        </p>
        <div className="flex gap-2">
          <Button size={"lg"}>
            <IconArrowUpRight />
            Book a Call
          </Button>
          <Button size={"lg"} variant={"outline"}>
            <IconMail />
            Email us
          </Button>
        </div>
      </section>
      <footer className="border-t border-foreground/20 bg-muted/30">
        <div className="max-w-5xl mx-auto py-24 px-10 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Safe Secure</h1>
            <div className="flex gap-4 text-foreground/70">
              <IconBrandGithub className="size-5 cursor-pointer hover:text-foreground transition-colors" />
              <IconBrandLinkedin className="size-5 cursor-pointer hover:text-foreground transition-colors" />
              <IconBrandTwitter className="size-5 cursor-pointer hover:text-foreground transition-colors" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Product</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Features
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Security
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Global Map
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Pricing
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Contact
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Blog
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Privacy Policy
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Terms of Service
              </li>
              <li className="hover:text-foreground cursor-pointer transition-colors">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-5xl mx-auto py-8 px-10 border-t border-foreground/10 text-sm text-muted-foreground text-left">
          © {new Date().getFullYear()} Safe Secure. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Page;
