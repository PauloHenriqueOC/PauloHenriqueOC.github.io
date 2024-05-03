import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import QrCode from "./pages/fe-mentor-qrcode/QrCode.jsx";

const router = createHashRouter([
	{
		path: "/",
		element: <Home />,
	},

	{
		path: "fe-mentor/qr-code",
		element: <QrCode />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
