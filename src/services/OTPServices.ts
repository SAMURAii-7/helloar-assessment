import axios from "axios";

interface sendOtpResponse {
    message: string;
    requestId: string;
}

// type verifyOtpResponse<T> = {
//     token: string;
//     getstream: T;
//     getstreamChat: T;
//     user: T;
// };

const API_URL = "https://dev.api.goongoonalo.com/v1";

export const sendOtp = async (phoneNumber: string) => {
    const response = await axios.post<sendOtpResponse>(
        `${API_URL}/auth/login`,
        {
            phoneNumber,
        }
    );
    return response.data;
};

export const verifyOtp = async (
    phoneNumber: string,
    requestId: string,
    otp: string
) => {
    const response = await axios.post(`${API_URL}/auth/verify_otp`, {
        phoneNumber,
        requestId,
        otp,
    });
    return response.data;
};
