import Home from "@/components/templates/home";
import { ServicesList } from "@/components/templates/services-list";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex   flex-col   ">
     
     <ServicesList/>

    </div>
  );
}
