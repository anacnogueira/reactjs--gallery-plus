import { Outlet } from "react-router";
import Text from "../components/text";

export default function LayoutMain() {
    return (
        <>
            <Text>Layout Main</Text>
            <Outlet />
        </>
        
    );
}