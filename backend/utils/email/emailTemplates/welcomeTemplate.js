
export const welcomeEmailTemplate = (username) => {
    return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #4CAF50;">Welcome to BizLink, ${username}!</h2>
      <p>We're excited to have you on board. 🎉</p>
      
      <p style="font-size: 16px;">
        Start connecting with others Businesses using our B2B platform built for Businesses Acroos the Globe.
      </p>

      <a href="https://google.com" 
         style="display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #4CAF50; 
         color: white; text-decoration: none; border-radius: 5px;">
        Visit BizLink
      </a>

      <p style="margin-top: 30px; font-size: 12px; color: #888;">
        If you didnt sign up for BizLink, you can safely ignore this email.
      </p>
    </div>
  `
};
