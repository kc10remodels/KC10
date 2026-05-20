import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export const metadata = {
  title: "Services | KC10 Remodels & Residential Painting",
  description: "Interior & exterior painting, drywall repairs, water damage restoration, and apartment turns. Serving the Dallas-Fort Worth area.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <WhyUs />
    </main>
  );
}
