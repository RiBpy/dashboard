/* eslint-disable react/prop-types */

import { Cloud } from "react-feather";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav"

export function Layout({ children }) {
  return (
    <div className="flex h-max flex-col border border-gray-300 m-3 shadow-md">
      <div className="border-b">
        <div className="flex items-center space-x-4 p-5">
          <span className="font-semibold">Dashboard</span>/
          <span className="font-semibold">Metronome</span>
        </div>
        <div className="flex h-16 items-center px-5">
          <Cloud/>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </div>
  );
}
