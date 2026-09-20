import { createFileRoute } from "@tanstack/react-router";
import App from "../App.jsx";

export const Route = createFileRoute("/treatments")({
  component: () => <App page="treatments" />,
});
