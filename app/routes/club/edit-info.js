import React from "react";
import { authenticator } from "../services/auth.server";
import { Form, useLoaderData } from "@remix-run/react";
import { editInfo, getSessionUserByEmail } from "../services/user.server";

export const loader = async ({ request }) => {
  const email = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const user = await getSessionUserByEmail(email);
  return {
    user: user,
  };
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  await editInfo(formData)
    .then((res) => res)
    .catch((e) => console.error("Edit info DB error" + e));
  return null;
};

export default function EditInfo() {
  const data = useLoaderData();
  const [formData, setFormData] = React.useState(data.user);

  function updateFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function isFormChanged() {
    return JSON.stringify(formData) === JSON.stringify(data.user);
  }
  return (
    <Form
      className="ClubInfoPage__InfoForm"
      action="/club/edit-info"
      method="POST"
    >
      <h3 className="ClubInfoPage__InfoForm--row">Club Information</h3>
      <span className="ClubInfoPage__InfoForm--row">
        The information provided will reflect in your events
      </span>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="name">Club Name</label>
        <input
          placeholder="name"
          id="name"
          name="name"
          defaultValue={data.user.name}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="websiteUrl">Website URL</label>
        <input
          placeholder="websiteUrl"
          id="websiteUrl"
          name="websiteUrl"
          defaultValue={data.user.websiteUrl}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="instaUrl">Instagram profile URL</label>
        <input
          placeholder="instaUrl"
          id="instaUrl"
          name="instaUrl"
          defaultValue={data.user.instaUrl}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="emailId" defaultValue={data.user.instaUrl}>
          Email ID (can't change sorry)
        </label>
        <input
          className="ClubInfoPage__InfoForm--disabled"
          placeholder="emailId"
          id="emailId"
          name="emailId"
          onChange={(e) => updateFormData(e)}
          value={data.user.emailId}
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <button
          className={`${
            isFormChanged() ? "ClubInfoPage__InfoForm--disabled" : ""
          }`}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
