import * as React from 'react';
import { useNavigate } from 'react-router';
import './css/Menu.css';
export default function Menu() {
    const navigate = useNavigate();
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hi!"),
        React.createElement("button", { onClick: () => { navigate('/'); } }, "Return to Home")));
}
//# sourceMappingURL=Menu.js.map