import { useState } from 'react';

const InviteUsersForm = () => {
  const [email, setEmail] = useState('');

  const handleInvite = async () => {
    try {
      // Send the invitation request to your server
      const response = await fetch('/api/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      // Handle the response from the server
      if (response.ok) {
        console.log('User invited successfully!');
        setEmail(''); // Clear the input field after successful invitation
      } else {
        console.error('Failed to invite user.');
      }
    } catch (error) {
      console.error('Error inviting user:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
        style={{color: "red"}}
      />
      <button onClick={handleInvite}>Invite</button>
    </div>
  );
};

export default InviteUsersForm;
