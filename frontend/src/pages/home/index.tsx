import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Button asChild>
        <Link to="/login">Login</Link>
      </Button>
    </div>
  );
}
