export const changePassword = (username) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      
      <div style="background-color: #007bff; padding: 20px;">
        <h2 style="color: white; margin: 0;">Password Changed</h2>
      </div>
      
      <div style="padding: 20px;">
        <p>Hi <strong>${username}</strong>,</p>
        
        <p>We wanted to let you know that your BizLink, account password was <strong>successfully changed</strong>.</p>
        
        <p>If you made this change, no further action is needed.</p>

        <p>If you did <strong>not</strong> request this change, please <a href="https://google.com" style="color: #007bff;">reset your password</a> immediately or contact our support team.</p>

        <p style="margin-top: 30px;">Stay secure,  
        <br><strong>Team BizLink</strong></p>

        <p style="color: #999; font-size: 12px; margin-top: 40px;">This is an automated message. Please do not reply.</p>
      </div>
    </div>
  </div>
`;
