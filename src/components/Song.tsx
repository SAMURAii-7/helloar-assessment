import SongThumbnail from "../assets/song-thumbnail.jpg";
import PlayIcon from "../assets/Vector.svg";
import DeleteIcon from "../assets/DeleteOutlined.svg";

interface SongProps {
    name: string;
    source: string;
    date: string;
}

const Song = ({ name, source, date }: SongProps) => {
    return (
        <div>
            <div className="mx-[22px] flex flex-row justify-start items-center">
                <div className="flex flex-row items-center">
                    <img
                        src={SongThumbnail}
                        alt="Song Thumbnail"
                        width={72}
                        height={72}
                    />
                    <p className="ml-[18px] text-[14px] font-normal opacity-[85%]">
                        {name}
                    </p>
                </div>
                <p className="text-[14px] font-normal opacity-[85%] ml-[288px]">
                    {source}
                </p>
                <p className="text-[14px] font-normal opacity-[85%] ml-[200px]">
                    {date}
                </p>
                <img
                    src={PlayIcon}
                    alt="Play Icon"
                    width={40}
                    height={40}
                    className="ml-[144px] cursor-pointer"
                />
                <img
                    src={DeleteIcon}
                    alt="Delete Icon"
                    width={14}
                    height={14}
                    className="ml-[120px] cursor-pointer"
                />
            </div>
            <div className="mx-[30px] mt-[20px] mb-[30px] bg-[#000] opacity-[6%] h-[1px]"></div>
        </div>
    );
};

export default Song;
