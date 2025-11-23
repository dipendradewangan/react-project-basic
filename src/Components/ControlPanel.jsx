import { RiMenu4Line } from "@remixicon/react";
import { X } from 'lucide-react'
import { useState } from "react";


const ControlPanel = () => {
    const [panelState, setPanelState] = useState('close')
    function myMenu() {
        if (panelState === 'close') {
            setPanelState('open')
        }
        else {
            setPanelState('close')
        }
    }

    return (
        <div>
            <div className={`bg-gray-600 absolute ${panelState === 'open' ? "left-[0px]" : "left-[-250px]" }  top-0 w-[250px] h-screen`}>
                <div className="blank-space h-[70px]"></div>
                <div className="blank-space w-full border border-red-500 p-3">fdsa</div>
            </div>
            <button onClick={myMenu}  className="flex gap-2 border border-gray-500 py-2 px-3 rounded-lg cursor-pointer active:scale-99 hover:bg-gray-600 absolute top-3 left-5 z-100"> {panelState === 'close' ? <RiMenu4Line /> : <X/> }   Control Panel</button>
        </div>
    )
}

export default ControlPanel
