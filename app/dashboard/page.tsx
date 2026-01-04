"use client";
import Logout from "@/features/auth/components/logout";
import { useRequireAuth } from "@/features/auth/hooks/use-require-auth";

export default function Home() {
  const { loading, user } = useRequireAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      Home
      <Logout />
    </div>
  );
}
