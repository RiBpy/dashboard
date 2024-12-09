import { useState } from "react";
import { LogOut, User } from "react-feather";

const UserNav = () => {
  const [user] = useState({
    name: "Adam Smith",
    role: "Admin",
    avatar: "https://i.pravatar.cc/150?img=3",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        {/* Avatar */}
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>

        {/* User name and role */}
        <div className="flex flex-col">
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.role}</p>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 p-2 bg-white border rounded-md shadow-lg">
          <div>
            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
              <User className="mr-2 h-4 w-4" />
              Profile
            </div>
            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserNav;
