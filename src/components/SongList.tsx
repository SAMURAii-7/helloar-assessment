import Song from "./Song";
import data from "../../data.json";

const SongList = () => {
    return (
        <div className="overflow-y-scroll h-[745px] mr-[50px]">
            <div className="flex flex-row justify-start mx-[60px]">
                <p className="text-[14px] font-medium opacity-[85%]">
                    SONG NAME
                </p>
                <p className="text-[14px] font-medium opacity-[85%] ml-[330px]">
                    SOURCE
                </p>
                <p className="text-[14px] font-medium opacity-[85%] ml-[200px]">
                    ADDED ON
                </p>
            </div>
            <div className="mx-[30px] mt-[20px] mb-[30px] bg-[#000] opacity-[6%] h-[1px]"></div>
            {data.map((song) => (
                <Song
                    key={song.id}
                    name={song.name}
                    source={song.source}
                    date={song.date}
                />
            ))}
        </div>
    );
};

export default SongList;
