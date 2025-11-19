'use client'

const UserActions = ({ userId, currentRole, isDisabled }) => {
  const handleRoleChange = async () => {
    try {
      const newRole = currentRole === 'user' ? 'admin' : 'user';
      const response = await fetch(`/api/users/${userId}/role`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (!response.ok) throw new Error('Failed to update role');
      
      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      console.error('Error updating role:', error);
      alert('Failed to update user role');
    }
  };

  const handleDisableToggle = async () => {
    try {
      const response = await fetch(`/api/users/${userId}/disable`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ disabled: !isDisabled }),
      });

      if (!response.ok) throw new Error('Failed to update user status');
      
      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      console.error('Error updating user status:', error);
      alert('Failed to update user status');
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={handleRoleChange}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Switch to {currentRole === 'user' ? 'Admin' : 'User'}
      </button>
      <button
        onClick={handleDisableToggle}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        {isDisabled ? 'Enable User' : 'Disable User'}
      </button>
    </div>
  );
};

export default UserActions;