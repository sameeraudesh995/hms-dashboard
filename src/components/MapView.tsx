
import ExploreButton from "./ExploreButton.tsx";


const handleExplore = () => {
     // show world map
};

const MapView = () => {

    return (
        <div className=" relative flex justify-between  rounded-[3px]  border-gray-200">
            <div className='w-[100%]'>
                <img
                    src="/assets/srilanka-map.png"
                    alt="Sri Lanka Map"
                    className="w-[150px] h-auto p-2"
                />
            </div>
            <div className='absolute right-0 mt-[-3px] mr-1'>
                <ExploreButton onExplore={handleExplore}/>
            </div>
        </div>
    );
};

export default MapView;
