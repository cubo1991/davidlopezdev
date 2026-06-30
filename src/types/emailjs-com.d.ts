declare module "emailjs-com" {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    userID?: string
  ): Promise<EmailJSResponseStatus>;

  const emailjs: { send: typeof send };
  export default emailjs;
}
