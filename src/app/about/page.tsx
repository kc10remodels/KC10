import About from "@/components/About";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "About Us | KC10 Remodels & Residential Painting",
  description: "Locally owned and operated painting company serving Dallas-Fort Worth. Learn about our story and what our customers say.",
};

export default function AboutPage() {
  return (
    <main>
      <About />
      <Testimonials />
    </main>
  );
}
