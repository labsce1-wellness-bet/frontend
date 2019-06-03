import React from "react";

export interface HomeProps { }

const Callback: React.SFC<HomeProps> = () => {
    return <div>
        Home
        <h1>Callback page, you're logged in.</h1>
    </div>;
};

export default Callback;
