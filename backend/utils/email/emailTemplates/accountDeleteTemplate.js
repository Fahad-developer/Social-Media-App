export const accountDeleted = (username) => `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8f9fa; color: #333;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      
      <div style="background-color: #dc3545; padding: 20px;">
        <h2 style="color: white; margin: 0;">Account Deleted</h2>
      </div>
      
      <div style="padding: 20px;">
        <p>Hi <strong>${username}</strong>,</p>
        
        <p>We're confirming that your account has been <strong>successfully deleted</strong> from BizLink.</p>
        
        <p>If this was done by mistake or you change your mind, you can always create a new account at any time.</p>

        <p style="margin-top: 30px;">Thank you for trying BizLink.</p>
        
        <p style="color: #999; font-size: 12px; margin-top: 40px;">This email is just a confirmation and no further action is required.</p>
      </div>
    </div>
  </div>
`;
