import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useSpotifyAuth from "../hooks/useSpotifyAuth";
// import Link from "react-router-dom";

const heroSection = {
    heading: 'TuneKeeper',
    // heading: 'Edits Made Easy',
    // tagline: 'Transform your videos with intention based editing.',
    // tagline: 'Craft Compelling Narratives with Ease',
    tagline: 'Export your Spotify playlists with ease.',

}

export const HeroSection = () => {
    const { login } = useSpotifyAuth();

    // console.log({login});
 
    return (
        <div className="pt-20">
            {/* <Particles className=" absolute inset-0 -z-10" /> */}
            <div className="text-center px-8">
                <div className="mb-6" data-aos="fade-down">
                    <div className="relative inline-flex before:absolute before:inset-0">
                        <Link href='https://linkedin.com/in/uday10saini' 
                            className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40" target="_blank">
                            <span className="relative inline-flex items-center">
                                My Socials{" "}
                                <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" >
                                    -&gt;
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-green-600 from-30% to-green-400 to-70%" data-aos="fade-down" >
                    {heroSection?.heading}
                </h1>
                <p className="mb-8 text-lg text-zinc-300/60" data-aos="fade-down" data-aos-delay="400" >
                    {heroSection?.tagline}
                </p>
                <div className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:justify-center sm:flex-row sm:inline-flex" data-aos="fade-down" data-aos-delay="400">
                    <a onClick={() => login()} rel="noopener noreferrer" className="w-full flex justify-center items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover-bg-white group">
                        Log into Spotify {" "}
                        <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default HeroSection;