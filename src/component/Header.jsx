import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function Header() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
          S
        </div>

        <div>
          <h1 className="font-semibold tracking-tight">Smart Task Manager</h1>
          <p className="text-xs text-muted-foreground">Workspace</p>
        </div>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-accent">
            <Avatar className="size-8">
              <AvatarFallback>VU</AvatarFallback>
            </Avatar>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-medium">Test User</p>
              <p className="text-xs text-muted-foreground">test@example.com</p>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Header;
