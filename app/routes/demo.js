import styleSheet from "~/styles/routes/demo.css";
import Footer from "~/Components/Footer/Footer";
import EventCard from "~/Components/EventCard/EventCard";
import Calendar from "~/Components/Calendar/Calendar";
import NavigateCard from "~/Components/NavigateCard/NavigateCard";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

let colors = ["#EBFFF2", "#F6EBFF", "#FFEFAF"];

export default function DemoPage() {
  return (
    <div className="DemoPage">
      {/* This is a demo page template.
      <Footer />
      {colors.map((element, index) => (
        <EventCard key={index} />
      ))}
      <Calendar /> */}

      <hr />
      <NavigateCard />
    </div>
  );
}
