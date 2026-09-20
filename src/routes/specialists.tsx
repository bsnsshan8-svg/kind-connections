import { createFileRoute } from "@tanstack/react-router";
// @ts-ignore -- App is an untyped JSX file
import App from "../App.jsx";

export const Route = createFileRoute("/specialists")({
  component: () => <App page="specialists" />,
});
