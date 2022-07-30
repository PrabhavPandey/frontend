import React from "react";
import styleSheet from "~/styles/routes/Club/EditInfo.css";

import addIcon from "../Assets/Img/addIcon.svg";
import keyIcon from "../Assets/Img/keyIcon.svg";
import exitIcon from "../Assets/Img/logoutIcon.svg";
import timeIcon from "../Assets/Img/timeIcon.svg";

import { Outlet, Link } from "react-router-dom";
import { authenticator } from "./services/auth.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getEventsByClub } from "./services/club.server";

export const loader = async ({ request }) => {
  const emailId = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  if (emailId === null || emailId === undefined)
    return json({ success: false, error: "Didn't give valid email ID" });
  const events = await getEventsByClub(emailId);

  return events;
};

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function EditInfo() {
  const data = useLoaderData();
  const [userInfo, setUserInfo] = React.useState({});

  React.useEffect(() => {
    let infoPointer = {
      emailId: data.emailId,
      name: data.name,
    };

    setUserInfo((userInfo) => ({
      ...userInfo,
      ...infoPointer,
    }));
  }, []);

  // const pathname = useLocation().pathname.replace("/club/", "");
  return (
    <div className="ClubInfoPage">
      <main className="ClubInfoPage__mainContainer">
        <nav className="ClubInfoPage__navBar">
          <div className="ClubInforPage__navBar__userDetails">
            <p className="ClubInfoPage__navBar__userDetails--userName">
              {`Hello there 👋 ${userInfo.name}`}
            </p>
            <p className="ClubInfoPage__navBar__userDetails--text">
              Here's how we are looking today. Start by adding an event !
            </p>
          </div>
          <Link className="ClubInfoPage__navBar--navBtn" to="/club/edit-info">
            <img
              className="ClubInfoPage__navBar--navImg"
              src={keyIcon}
              alt="keyIcon"
            />{" "}
            <p>Account information</p>
          </Link>
          <Link
            className="ClubInfoPage__navBar--navBtn"
            to="/club/create-event"
          >
            <img
              className="ClubInfoPage__navBar--navImg"
              src={addIcon}
              alt="addIcon"
            />{" "}
            <p>Create Event</p>
          </Link>
          <Link className="ClubInfoPage__navBar--navBtn" to="/club/dashboard">
            <img
              className="ClubInfoPage__navBar--navImg"
              src={timeIcon}
              alt="timeIcon"
            />{" "}
            <p>Event History</p>
          </Link>

          <form method="post" action="/logout" className="logoutBTNContianer">
            <button className="ClubInfoPage__navBar--navBtn" type="submit">
              <img
                className="ClubInfoPage__navBar--navImg"
                src={exitIcon}
                alt="exitIcon"
              />{" "}
              <p className="logout">Log out</p>
            </button>
          </form>
        </nav>
        <div className="ClubInfoPage__contentContainer">
          <div className="ClubInfoPage__contentContainer__userDetails">
            <p className="ClubInfoPage__contentContainer__userDetails--userName">
              {`Hello there 👋 ${userInfo.name}`}
            </p>
            <p className="ClubInfoPage__contentContainer__userDetails--text">
              Here's how we are looking today. Start by adding an event !
            </p>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
