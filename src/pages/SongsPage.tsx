import MenuIcon from "../assets/menu-icon.png";
import SongThumbnail from "../assets/song-thumbnail.jpg";
import SongList from "../components/SongList";
import prev from "../assets/prev.svg";
import pause from "../assets/pause.svg";
import next from "../assets/next.svg";
import logout from "../assets/logout.svg";
import Cookie from "universal-cookie";
import { useNavigate } from "react-router-dom";
import AddSongForm from "../components/AddSongForm";
import { useState } from "react";

const SongsPage = () => {
    const [trigger, setTrigger] = useState<boolean>(false);

    const cookie = new Cookie();
    const navigate = useNavigate();

    const handleLogout = () => {
        cookie.remove("token");
        navigate("/");
    };

    const toggleForm = () => {
        setTrigger(!trigger);
    };

    return (
        <>
            <AddSongForm trigger={trigger} toggleForm={toggleForm} />
            <div className="flex flex-row justify-start w-full h-screen">
                <div className="w-[255px] h-screen border flex flex-col justify-between">
                    <div>
                        <h1 className="font-bold text-[36px] text-[#552583] text-center my-[30px] mx-[55px]">
                            Logo
                        </h1>
                        <div className="flex flex-row w-full items-center justify-start cursor-pointer bg-[#E6F7FF] h-[40px]">
                            <img
                                src={MenuIcon}
                                alt="Menu Icon"
                                height={24}
                                width={24}
                                className="ml-[24px] my-[10px]"
                            />
                            <p className="mx-[10px] my-[10px] w-full">Songs</p>
                            <div className="w-[3px] h-full bg-[#1890FF]"></div>
                        </div>
                    </div>
                    <div
                        className="flex flex-row px-[24px] mb-[16px] cursor-pointer"
                        onClick={handleLogout}
                    >
                        <img
                            src={logout}
                            alt="Logout Icon"
                            height={20}
                            width={20}
                        />
                        <p className="ml-[10px]">Logout</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div>
                        <div className="mx-[30px] my-[16px]">
                            <div className="flex flex-row">
                                <p className="text-[14px] font-normal opacity-[45%]">
                                    First-level Menu
                                </p>
                                <span className="text-[14px] font-normal opacity-[45%] mx-[8px]">
                                    /
                                </span>
                                <p className="text-[14px] font-normal opacity-[45%]">
                                    Second-level Menu
                                </p>
                                <span className="text-[14px] font-normal opacity-[45%] mx-[8px]">
                                    /
                                </span>
                                <p className="text-[14px] font-normal opacity-[85%]">
                                    Current Page
                                </p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-[20px] font-medium mt-[8px] opacity-[85%]">
                                    Songs
                                </p>
                                <button
                                    onClick={toggleForm}
                                    className="bg-[#FDB927] py-[5px] px-[16px] rounded-[2px] transition-transform transform hover:scale-105"
                                >
                                    Add Songs
                                </button>
                            </div>
                        </div>
                    </div>
                    <SongList />
                    <div className="h-[75px] flex flex-col">
                        <div className="w-full h-[5px] bg-gray-400">
                            <div className="bg-black w-3/5 h-[3px]"></div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <img
                                    src={SongThumbnail}
                                    alt="Song Thumbnail"
                                    width={72}
                                    height={72}
                                />
                                <p className="ml-[18px] text-[14px] font-medium opacity-[85%]">
                                    Fake Song 1
                                </p>
                            </div>
                            <div className="flex flex-row mr-[22px]">
                                <img
                                    src={prev}
                                    alt="Previous Icon"
                                    width={20}
                                    height={20}
                                    className="cursor-pointer"
                                />
                                <img
                                    src={pause}
                                    alt="Pause Icon"
                                    width={23}
                                    height={23}
                                    className="mx-[16px] cursor-pointer"
                                />
                                <img
                                    src={next}
                                    alt="Next Icon"
                                    width={20}
                                    height={20}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SongsPage;
