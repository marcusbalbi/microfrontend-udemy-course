import React, { useRef, useEffect } from "react";
import { mount } from "modulex/ModuleXApp";
import { useHistory } from "react-router-dom";
const ModuleXApp = () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
        });
        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
};

export default ModuleXApp;
