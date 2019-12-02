import { useEffect, useRef } from 'react';

const useSetInterval = (callback, milisecondsDelay) => {

    const callbackToExecute = useRef();

    useEffect(() => {

        callbackToExecute.current = callback;

    }, [callback]);

    useEffect(() => {

        function refreshData() {
            callbackToExecute.current();
        }

        if (milisecondsDelay !== null) {
            let timeoutID = setInterval(refreshData, milisecondsDelay);
            return () => clearInterval(timeoutID);
        }
    }, [milisecondsDelay]);
}

export { useSetInterval };
