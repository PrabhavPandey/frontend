import { Outlet } from "react-router-dom";
import styleSheet from "~/styles/routes/Club/EditInfo.css";
import { authenticator } from "./services/auth.server";
import { Link, useLocation } from "react-router-dom";
import FullLogo from "../Assets/Img/FullLogo.svg";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export const loader = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return null;
};

export default function EditInfo() {
  const pathname = useLocation().pathname.replace("/club/", "");
  return (
    <div className="ClubInfoPage">
      <header>
        <a href="/">
          <img src={FullLogo} alt="Full Logo" />
        </a>
        <button>Log Out</button>
      </header>
      <main className="ClubInfoPage__mainContainer">
        <nav className="ClubInfoPage__navBar">
          <Link
            className={
              pathname === "edit-info" ? "ClubInfoPage__navBar--active" : ""
            }
            to="/club/edit-info"
          >
            Account Information
          </Link>
          <Link
            className={
              pathname === "create-event" ? "ClubInfoPage__navBar--active" : ""
            }
            to="/club/create-event"
          >
            Create Event
          </Link>
          <Link
            className={
              pathname === "dashboard" ? "ClubInfoPage__navBar--active" : ""
            }
            to="/club/dashboard"
          >
            Event History
          </Link>
        </nav>
        <div className="ClubInfoPage__contentContainer">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
