/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
const pwdSetupTemplate = (link) => {
    return (
        `
        <html>
            <head>
                <style>
                .btn {
                    background-color: #04AA6D;
                    border: none;
                    color: white !important;
                    padding: 10px 15px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    cursor: pointer;
                    margin: 10px 0px;
                }
                </style>
            </head>
            <body>
                <div>Hi there,</div>
                <span>Please click on the button below to setup your account password.</span>
                <br />
                <a href=${link} class="btn">Setup password</a>
                <br />
                <span>Alternatively, you can click on the link below.</span>
                <br />
                <a href=${link}>${link}</a>
            </body>
        </html>
        `
    );
}

module.exports = { pwdSetupTemplate };
