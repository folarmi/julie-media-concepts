import emailjs from "emailjs-com";

export const sendEmail = (templateParams: any) => {
  emailjs
    .send(
      "service_o1bcc7r",
      "template_mgzq7k6",
      templateParams,
      "t8NjOLFaL9WGcN0tq"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};
