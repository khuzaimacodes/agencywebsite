import Services from "@/components/homes/home-2/Services";

export const metadata = {
  title: "Fixed Services Section Demo",
  description: "Demo page showing the fixed services section with equal card heights",
};

export default function ServicesFixedDemoPage() {
  return (
    <main>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "10px" }}>Fixed Services Section Demo</h1>
        <p style={{ marginBottom: "40px", color: "#666" }}>
          This page demonstrates the fixed services section with "Our Feathered Services" title, 
          equal card heights, and responsive layout.
        </p>
      </div>
      <Services />
    </main>
  );
}
