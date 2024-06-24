import Home from "@/ui/templates/home";
import { ServicesList } from "@/ui/templates/services-list";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex   flex-col   ">
     
     <ServicesList/>

    </div>
  );
}
