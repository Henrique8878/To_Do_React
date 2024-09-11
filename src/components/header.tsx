import { Logo } from "./Logos/logo"

export function Header(){
    return(
        <>
            <header className="bg-black flex items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                    <Logo/>
                    <span className="text-purple-dark text-[2.5rem]">
                        <strong className="text-blue">
                            to
                        </strong>
                        do
                    </span>
                </div>
            </header>
        </>
    )
}