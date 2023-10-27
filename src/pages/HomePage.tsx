import { useState } from "react";
import Login from "../components/Login";
import OTPVerification from "../components/OTPVerification";
import { sendOtp, verifyOtp } from "../services/OTPServices";
import Cookie from "universal-cookie";

const HomePage = () => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [requestId, setRequestId] = useState<string>("");

    const date = new Date();
    date.setDate(date.getDate() + 30);

    const cookies = new Cookie();

    const handlePhoneNumber = async (value: string) => {
        const res = await sendOtp(value);
        setRequestId(res.requestId);
        setPhoneNumber(value);
        console.log(res);
    };

    const handleOtp = async (value: string) => {
        const res = await verifyOtp(phoneNumber, requestId, value);
        console.log(res);
        cookies.set("token", res.token, {
            sameSite: "none",
            secure: true,
            expires: date,
        });
    };

    return (
        <>
            {phoneNumber ? (
                <OTPVerification
                    phoneNumber={phoneNumber}
                    handleOtp={handleOtp}
                />
            ) : (
                <Login handlePhoneNumber={handlePhoneNumber} />
            )}
        </>
    );
};

export default HomePage;
