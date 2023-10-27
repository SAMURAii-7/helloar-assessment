import OTPInput from "./OTPInput";

interface OTPVerificationProps {
    phoneNumber: string;
    handleOtp: (value: string) => void;
}

const OTPVerification = ({ phoneNumber, handleOtp }: OTPVerificationProps) => {
    return (
        <div className="flex flex-col justify-center text-[#552583] w-[414px] h-[334px]">
            <h1 className="font-medium text-[38px]">OTP Verification</h1>
            <p className="text-[12px] text-[#101920] mt-[10px]">
                We have sent an OTP to {phoneNumber}. Please enter the code
                received to verify.
            </p>
            <OTPInput handleOtp={handleOtp} />
        </div>
    );
};

export default OTPVerification;
