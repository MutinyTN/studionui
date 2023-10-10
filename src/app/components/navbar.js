

const navlist = "p-4  duration-200 rounded-sm hover:text-white bg-gradient-to-b  pb-6 pt-8 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"

export default function Navbar() {


    return <div className="w-full p-12 flex absolute text-3xl font-extralight  cursor-none">
        <div className="w-1/3 ">
            <ul className="flex space-x-12">
                <li className={navlist}>
                    Industrial
                </li>
                <li className={navlist}>
                    Design
                </li>
                <li className={navlist}>
                    Portfolio
                </li>
            </ul>
        </div>
        <div className="w-1/3 text-center">
            <div className={navlist}>
                núi

            </div>
        </div>
        <div className="w-1/3 text-end">

            <div className={navlist}>
                About

            </div>
        </div>


    </div>
}