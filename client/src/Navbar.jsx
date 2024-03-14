import React from 'react';

const Navbar = () => {
    return(
        <div className="flex flex-row bg-slate-900 text-3xl text-white justify-between p-3 font-titillium">
            <div className="w-1/2 font-titillium">
                SpaCey
            </div>
            <div className="flex flex-row space-x-12 text-2xl font-titillium px-2">
                <a href="/bounties"> 
                    Bounties
                </a>
                <a href="/dao"> 
                    DAO
                </a>
                <a href="/account"> 
                    Account
                </a>
            </div>

        </div>
    )
}
export default Navbar