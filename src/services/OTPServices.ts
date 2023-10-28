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
    try {
        const response = await axios.post<sendOtpResponse>(
            `${API_URL}/auth/login`,
            {
                phoneNumber,
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error while making send otp request:", error);
        throw error;
    }
};

export const verifyOtp = async (
    phoneNumber: string,
    requestId: string,
    otp: string
) => {
    try {
        const response = await axios.post(`${API_URL}/auth/verify_otp`, {
            phoneNumber,
            requestId,
            otp,
        });
        return response.data;
    } catch (error) {
        console.error("Error while making verify otp request:", error);
        throw error;
    }
};
