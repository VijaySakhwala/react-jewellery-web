import React from "react";

const Mail = () => {

    return (
        <>

            <div className="mail-outer">
                <div className="container">
                    <div className="mail-heding">
                        <h2>
                            <span>Newsletter </span>
                        </h2>
                        <p>We promise to send only good things </p>
                    </div>
                    <div className="mail-inner">
                    
                        <div className="mail-child1">
                            <form method="get">
                                <div className="mail-box">
                                    <input type="mail" name="mail" placeholder="youremail@domain.com" />
                                </div>
                                <div className="mail-send">
                                    <a href="#">SEND</a>
                                </div>
                            </form>
                        </div>
                
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mail