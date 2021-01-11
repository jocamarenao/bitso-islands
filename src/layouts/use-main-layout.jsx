import { useState } from 'react'

const useMainLayout = () => {
    const [isControlRoomOpened, setControlRoomAccess] = useState(false);

    return {
        setControlRoomAccess,
        isControlRoomOpened,
    };
}

export default useMainLayout;