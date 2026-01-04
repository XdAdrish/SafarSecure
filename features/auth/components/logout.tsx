import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { toast } from "sonner";

const Logout = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logout successful");
    } catch (error) {
      toast.error("Logout failed");
    }
  };
  return <Button onClick={handleLogout}>Log out</Button>;
};

export default Logout;
