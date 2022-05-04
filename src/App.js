import SliderDashboard from "./components/SliderDashboard";

export default function App() {
  return (
    <div
      style={{
        padding: "40px 100px",
        backgroundColor: "#ebebeb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <SliderDashboard />
    </div>
  );
}
