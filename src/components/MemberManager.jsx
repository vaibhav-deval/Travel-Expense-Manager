import { useState } from "react";

const MemberManager = ({ members, setMembers }) => {
  const [newMember, setNewMember] = useState("");
  const [editMemberIndex, setEditMemberIndex] = useState(null);

  const addMember = () => {
    const trimmed = newMember.trim();
    if (!trimmed) return;

    if (editMemberIndex !== null) {
      const updated = [...members];
      updated[editMemberIndex] = trimmed;
      setMembers(updated);
      setEditMemberIndex(null);
    } else if (!members.includes(trimmed)) {
      setMembers([...members, trimmed]);
    }
    setNewMember("");
  };

  const editMember = (index) => {
    setNewMember(members[index]);
    setEditMemberIndex(index);
  };

  const deleteMember = (index) => {
    const nameToDelete = members[index];
    const updatedMembers = [...members];
    updatedMembers.splice(index, 1);
    setMembers(updatedMembers);
  };

  return (
    <div className="mb-4 ">
      <div className="flex gap-2 mb-4 flex-col md:flex-row">
        <input
          type="text"
          placeholder="Add Member Name"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <button
          onClick={addMember}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
        >
          {editMemberIndex !== null ? "Update" : "Add"} Member
        </button>
      </div>
      {members.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold">Members</h2>
          <ul className="list-disc pl-5">
            {members.map((member, idx) => (
              <li key={idx} className="flex items-center justify-between pr-4">
                <span>{member}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => editMember(idx)}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteMember(idx)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MemberManager;