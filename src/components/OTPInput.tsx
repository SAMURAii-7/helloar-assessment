import { useState, ChangeEvent } from "react";

interface OtpInputProps {
    handleOtp: (value: string) => void;
}

const OtpInput = ({ handleOtp }: OtpInputProps) => {
    const [otpField, setOtpField] = useState(["", "", "", ""]);

    const handleInputChange = (index: number, value: string) => {
        if (!isNaN(Number(value)) && value.length <= 1) {
            const newOtp = [...otpField];
            newOtp[index] = value;
            setOtpField(newOtp);

            // Automatically shift the cursor to the next box or the previous box
            if (value && index < otpField.length - 1) {
                document.getElementById(`otpField-input-${index + 1}`)?.focus();
            } else if (!value && index > 0) {
                document.getElementById(`otpField-input-${index - 1}`)?.focus();
            }
        }
    };

    const handleKeyDown = (
        index: number,
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Backspace" && !otpField[index] && index > 0) {
            // Automatically shift to the previous box on backspace
            document.getElementById(`otpField-input-${index - 1}`)?.focus();
        }
    };

    return (
        <>
            <div className="flex justify-between mt-[16px]">
                {otpField.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        className="w-[78px] h-[78px] border border-[#D0D3D4] rounded text-center text-3xl"
                        value={value}
                        id={`otpField-input-${index}`} // Add an id for each input
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, e.target.value)
                        }
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                            handleKeyDown(index, e)
                        }
                    />
                ))}
            </div>
            <button
                onClick={() => handleOtp(otpField.reduce((a, b) => a + b, ""))}
                className="bg-[#552583] text-white rounded-[12px] font-bold p-2 w-full mt-[25px] transition-transform transform hover:scale-105"
            >
                Verify
            </button>
        </>
    );
};

export default OtpInput;
