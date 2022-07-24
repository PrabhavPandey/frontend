import { redirect } from "@remix-run/node";
import { useLoaderData, useOutletContext, useParams } from "@remix-run/react";
import PlaceCard from "~/Components/PlaceCard/PlaceCard";
import InfoContainer from "~/Components/InfoContainer/InfoContainer";
import AcademicInfo from "~/Components/AcademicInfo/AcademicInfo";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  // return url.searchParams.get("redirect");
  // return a json of all the searchParams
  let paramJson = {};
  url.searchParams.forEach((value, key) => {
    paramJson[key] = value;
  });

  return paramJson;

  return url;
};

export default function AdminDetails() {
  const urlParams = useLoaderData();
  const admin = useOutletContext();
  const { option } = useParams();
  const [highlighted, setHighlighted] = React.useState(false);

  React.useEffect(() => {
    if (highlighted) {
      setTimeout(() => {
        setHighlighted(false);
      }, 1500);
    }
  }, [highlighted]);

  React.useEffect(() => {
    let scrollToElement;
    if (urlParams.name) {
      scrollToElement = document.getElementById(urlParams.name);
      setHighlighted(true);
    } else if (!urlParams.redirect) {
      scrollToElement = document.querySelector(
        "body > div > div.InfoContainer__head__header"
      );
    }
    if (scrollToElement) {
      if (window.innerWidth >= 590) {
        window.scrollTo({
          top: scrollToElement.offsetTop - 220,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: scrollToElement.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [option, urlParams]);

  function generateActionLinks(entry) {
    let actionLinks = [];
    if (entry.DeansEmail) {
      actionLinks.push({
        title: "Contact",
        href: `mailto:${entry.DeansEmail}`,
      });
    }
    if (entry.Departments.HodsEmail) {
      actionLinks.push({
        title: "Contact",
        href: `mailto:${entry.Departments.HodsEmail}`,
      });
    }
    return actionLinks;
  }

  return (
    <div className="AdminPage__content--right">
      {admin[option].map((entry, index) => (
        <AcademicInfo
					key={index}
					data={entry}
        // actionLists={generateActionLinks(admin[option][index])}
        />
      ))}
    </div>
  );
}
