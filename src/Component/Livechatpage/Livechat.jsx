import "./Livechat.css"

const Livechat =()=>{
    return(
        <div className="LivechatContainer">
            <div className="LivechatTop">
                <div className="LivechatText">
                    <h1>Live Chat</h1>
                </div>
            </div>
            <div className="LivechatDown">
                <div className="LiveChatdownBox">
                    <div className="LiveChatdownWrapper">
                        <div className="LivechatHello"></div>
                        <div className="LivechatHi"></div>
                        <div className="LivechatHello">
                            <div className="LivechatProfilecircle">
                                <div className="Leftlivechatprofile">
                                    <img src="public/Frame2.png" alt="image" />
                                </div>
                                <div className="Rightlivechattext">
                                    <div className="Rightlivechattextwrap">
                                    <p>Hello</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="LivechatHi">
                            <div className="LeftlivechatHiprofilecircle"></div>
                            <div className="RightlivechatHiprofilecircle">
                                <div className="LeftlivechatHiprofile">
                                    <div className="LeftlivechatHiProfilewrap">
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <div className="RightlivechatHiprofile">
                                    <img src="public/Frame1.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="SendtextContainer">
                    <div className="Sendtextmainbody">
                        <div className="sendtextlivechatwrap">
                            <div className="Leftsendtectlivechat">
                                <input type="text" placeholder="Some text...." />
                            </div>
                            <div className="Rightsendtectlivechat">
                                <button>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Livechat