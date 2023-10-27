import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { E164Number } from "libphonenumber-js/core";

interface LoginProps {
    handlePhoneNumber: (value: string) => void;
}

const Login = ({ handlePhoneNumber }: LoginProps) => {
    const [value, setValue] = useState<E164Number | undefined>();

    const handlePhoneNumberSubmit = () => {
        if (value === undefined)
            return alert("Please enter a valid phone number");
        else {
            if (value.length < 10) {
                alert("Please enter a valid phone number");
                setValue(undefined);
            } else handlePhoneNumber(value.toString());
        }
    };

    return (
        <div className="flex flex-col justify-center text-[#552583] w-[414px] h-[238px]">
            <h1 className="font-medium text-[38px]">Sign In</h1>
            <p className="text-[12px] text-[#101920] mt-[10px]">
                Please enter your mobile number to login. We will send an OTP to
                verify your number.
            </p>
            <PhoneInput
                placeholder="Phone Number"
                value={value}
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                onChange={setValue}
                className="w-[407px] h-[59px] mt-[16px] border-[1px] border-[#D0D3D4] rounded-[8px] p-5 text-[#101920]"
            />
            <button
                onClick={handlePhoneNumberSubmit}
                className="bg-[#552583] text-white rounded-[12px] font-bold p-2 w-full mt-[25px] transition-transform transform hover:scale-105"
            >
                Sign In
            </button>
        </div>
    );
};

export default Login;
