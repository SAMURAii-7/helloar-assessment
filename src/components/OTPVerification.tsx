import OTPInput from "./OTPInput";

interface OTPVerificationProps {
    phoneNumber: string;
    handleOtp: (value: string) => void;
    handlePhoneNumber: (value: string) => void;
    setPhoneNumber: (value: string) => void;
}

const OTPVerification = ({
    phoneNumber,
    handleOtp,
    handlePhoneNumber,
    setPhoneNumber,
}: OTPVerificationProps) => {
    return (
        <div className="flex flex-col justify-center text-[#552583] w-[414px] h-[334px]">
            <h1 className="font-medium text-[38px]">OTP Verification</h1>
            <p className="text-[12px] text-[#101920] mt-[10px]">
                We have sent an OTP to {phoneNumber}. Please enter the code
                received to verify.
            </p>
            <OTPInput handleOtp={handleOtp} />
            <a
                className="font-helvetica font-light text-[16px] text-[#101920] underline text-center mt-[25px] cursor-pointer"
                onClick={() => handlePhoneNumber(phoneNumber)}
            >
                Resend OTP
            </a>
            <a
                className="font-helvetica font-light text-[16px] text-[#101920] underline text-center mt-[16px] cursor-pointer"
                onClick={() => setPhoneNumber("")}
            >
                Use another number
            </a>
        </div>
    );
};

export default OTPVerification;
