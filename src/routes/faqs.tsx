import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore -- App is an untyped JSX file
import App from "../App.jsx";

export const Route = createFileRoute("/faqs")({
  component: () => <App page="faqs" />,
});
