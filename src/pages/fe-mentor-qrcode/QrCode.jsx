import "./QrCode.css";

import qrImg from "../../assets/image-qr-code.png";

const QrCode = () => {
	return (
		<div className="root-qrcode-container">
			<div className="main-container">
				{/* Container for QR Code Image */}
				<div className="qrcode-container">
					<img className="qr-image" src={qrImg} alt="QR Code Image" />
				</div>

				{/* Container for Title description */}
				<div className="title-container">
					<h3>Improve your front-end skills by building projects</h3>
				</div>

				{/* Container for description */}
				<div className="text-container">
					<p>
						Scan the QR code to visit Frontend Mentor and take your
						coding skills to the next level
					</p>
				</div>
			</div>
		</div>
	);
};

export default QrCode;
