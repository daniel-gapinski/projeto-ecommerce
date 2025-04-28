import Search from "./Search";
import { LogIn } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <header className="p-3 w-full min-h-14">
            <div className="flex justify-between items-center">
                <Search />
                <div className="flex gap-2">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <button className="hover:scale-125"><LogIn size={18} color="#10a10a" /></button>
                        </SignInButton>
                    </SignedOut>
                    
                </div>
            </div>
        </header>
    )
}