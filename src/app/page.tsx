import Image from "next/image";  // detete
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<>
    <div className="text-4xl font-bold text-green-500">
      Hello world
    </div>
    <Button >
      Click this
    </Button>
    {/* <Button variant="dak" className="star-orbit-rectangle">
      Click me
      <span className="star"></span>
       <span className="star"></span>
  <span className="star"></span>
  <span className="star"></span>
      </Button> */}
</>
  );
}
