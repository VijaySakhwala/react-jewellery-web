import React from "react";


const Account = () => {

    return (
        <>

            <div className="sign-outer">
                <div className="container">
                    <div className="sign-heading">
                        <h2>Customer Login</h2>
                    </div>
                    <div className="sign-inner">
                        <div className="sign-child1">
                            <form method="get" class="sign">
                                <div class="registerd-heading">
                                    <h3>Registered Customers</h3>
                                </div>
                                <div className="suggestion">
                                    <span>If you have an account, sign in with your email address.</span>
                                </div>
                                <div className="sign-email">
                                    <label>Email</label>
                                    <input type="email" name="email address"/>
                                </div>
                                <div className="sign-password">
                                    <label>password</label>
                                    <input type="password" name="password"/>
                                </div>

                                <div className="sign-button">

                                    <a href="#">sign in</a>
                                </div>
                                <div className="forget-password">

                                    <a href="#">
                                        <p>Forgot Your Password?</p>
                                    </a>
                                </div>
                                <div className="new-costumer">
                                    <div className="new-heading">
                                        <h2>New Customers</h2>
                                    </div>
                                    <div className="new-suggestion ">
                                        <p>Creating an account has many benefits: check out faster, keep more than one
                                            address, track orders and more.</p>
                                    </div>
                                    <div className="create-button">
                                        <a href="#">Create an Account</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Account