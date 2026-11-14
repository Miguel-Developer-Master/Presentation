import {encodeMessage} from "./utils/encodeMessageToUrl.js";

const phoneNumber = "5599991301047";
const message = "Hello, i'm interested in your services and your competences! Let's negotiate";
const link = encodeMessage(phoneNumber, message);

const whatsappLink = document.getElementById("whatsapp-link");
whatsappLink.href = link;
whatsappLink.target = "_blank";

const footerButtons = document.querySelectorAll(".buttons-just-text");
const footer = document.querySelector("footer");

for (const button of footerButtons) {
    button.addEventListener("click", () => {
        footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}