import { RxDotFilled } from "react-icons/rx";

const Shorts = () => {
    return (
        <div className="hero min-h-screen bg-sky-200 text-blue-900 m-4">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://lumiere-a.akamaihd.net/v1/images/pr_olafsfrozenadventure_18539_cac7af62.png?region=0%2C0%2C400%2C400" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="w-full">
                    <h1 className="text-5xl font-bold">FROZEN SHORTS</h1>
                    <p className='mt-6 text-xl font-semibold'>Olaf’s Frozen Adventure plus 6 Classic Disney Shorts</p>

                    <ul className='mt-6 ml-4'>
                        <li className='my-2 flex items-center gap-1'><RxDotFilled /> OLAF is FROZEN ADVENTURE featuring 4 new songs</li>
                        <li className='my-2 flex items-center gap-1'><RxDotFilled /> THE HOCKEY CHAMP (1939) Donald Duck Cartoon</li>
                        <li className='my-2 flex items-center gap-1'><RxDotFilled /> WINTER (1930) Silly Symphony</li>
                        <li className='my-2 flex items-center gap-1'><RxDotFilled /> THE ART OF SKIING (1941) Goofy Cartoon</li>
                    </ul>
                    <button className='mt-4 ml-5 flex items-center gap-1'>See More</button>
                </div>
            </div>
        </div>
    );
};

export default Shorts;