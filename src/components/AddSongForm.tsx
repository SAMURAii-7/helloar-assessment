import CloseIcon from "../assets/Close.svg";

interface AddSongFormProps {
    trigger: boolean;
    toggleForm: () => void;
}

const AddSongForm = ({ trigger, toggleForm }: AddSongFormProps) => {
    return trigger ? (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-[999]">
            <div className="relative bg-[#fff] w-[798px] h-[535px]">
                <div className="flex flex-row justify-between py-[16px] px-[24px] border">
                    <h1>Add Song</h1>
                    <img
                        onClick={toggleForm}
                        src={CloseIcon}
                        alt="Close Icon"
                        className="cursor-pointer"
                    />
                </div>
                <form className="mt-[38px] mx-[30px]">
                    <div className="flex flex-col mt-[24px]">
                        <label
                            htmlFor="songName"
                            className="text-[14px] font-normal opacity-[85%]"
                        >
                            Song Name
                        </label>
                        <input
                            type="text"
                            id="songName"
                            placeholder="Song Name"
                            className="border px-[12px] py-[4px]"
                        />
                    </div>
                    <div className="flex flex-col mt-[24px]">
                        <label
                            htmlFor="songLink"
                            className="text-[14px] font-normal opacity-[85%]"
                        >
                            Song Link
                        </label>
                        <input
                            type="text"
                            id="songSource"
                            placeholder="URL"
                            className="border px-[12px] py-[4px]"
                        />
                    </div>
                    <div className="flex flex-col mt-[24px]">
                        <label
                            htmlFor="songSource"
                            className="text-[14px] font-normal opacity-[85%]"
                        >
                            Song Source
                        </label>
                        <input
                            type="text"
                            id="songSource"
                            placeholder="Source Name"
                            className="border px-[12px] py-[4px]"
                        />
                    </div>
                    <div className="flex flex-col mt-[24px]">
                        <label
                            htmlFor="songThumbnail"
                            className="text-[14px] font-normal opacity-[85%]"
                        >
                            Song Thumbnail
                        </label>
                        <input
                            type="file"
                            id="songThumbnail"
                            placeholder="Song Thumbnail"
                            className="border px-[12px] py-[4px]"
                        />
                    </div>
                    <div className="flex flex-col mt-[24px]">
                        <label
                            htmlFor="songFile"
                            className="text-[14px] font-normal opacity-[85%]"
                        >
                            Song File
                        </label>
                        <input
                            type="file"
                            id="songFile"
                            placeholder="Song File"
                            className="border px-[12px] py-[4px]"
                        />
                    </div>
                    <div className="flex flex-row justify-end">
                        <button
                            onClick={toggleForm}
                            className="bg-[#fff] py-[5px] px-[16px] border rounded-[2px] transition-transform transform hover:scale-105 mt-[24px]"
                        >
                            Cancel
                        </button>
                        <button className="text-white bg-[#1890FF] py-[5px] px-[16px] ml-[10px] rounded-[2px] transition-transform transform hover:scale-105 mt-[24px]">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : (
        ""
    );
};

export default AddSongForm;
