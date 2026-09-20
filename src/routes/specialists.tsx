import { createFileRoute } from "@tanstack/react-router";
import App from "../App.jsx";

export const Route = createFileRoute("/specialists")({
  component: () => <App page="specialists" />,
});
