import { redirect } from "@remix-run/node";

export const loader = () => {
  return redirect("/navigate/Convocation?redirect=true");
};
