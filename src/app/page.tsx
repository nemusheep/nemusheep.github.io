import Image from "next/image";
import Link from "next/link";
import '@/app/globals.css';
import Greeting from "@/components/Greeting";

export default function Home() {
    return (
        <div className='App-home'>
            <h1>
                寝床
            </h1>
            <p></p>
            <div className='time'>
                <Greeting />
            </div>
        </div>
    );
}
