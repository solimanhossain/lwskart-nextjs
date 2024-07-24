import SideBar from "./SideBar";
import Info from "./drawerSidebar/Info";
import CloseMenuBtn from "./drawerSidebar/CloseMenuBtn";
import LearnMore from "./drawerSidebar/LearnMore";

export default function DrawerSidebar() {
    return (
        <div
            id="drawer-example"
            className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
            tabIndex="-1"
            aria-labelledby="drawer-label"
        >
            <Info />

            <CloseMenuBtn />

            <SideBar />

            <LearnMore />
        </div>
    );
}
