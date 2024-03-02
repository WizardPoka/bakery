import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Testapp() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groupSchedule, setGroupSchedule] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get_groups');
        setGroups(response.data);
        // Выберем первые три группы (если они есть)
        if (response.data.length > 2) {
          setSelectedGroup(response.data[0]);
          fetchGroupSchedule(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups();
  }, []);

// =================================================================================================

const fetchGroupSchedule = async (groupName) => {
    try {
      const response = await axios.post('http://localhost:5000/get_schedule', { group_name: groupName });
      console.log(response.data); // Посмотреть, что приходит в response.data
      setGroupSchedule(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  };
  
// =================================================================================================

console.log(groupSchedule)

  return (
    <div>
      <h1>Groups:</h1>
      <ul>
        {groups.slice(0, 3).map((group, index) => (
          <li key={index} onClick={() => { setSelectedGroup(group); fetchGroupSchedule(group); }}>
            {group}
          </li>
        ))}
      </ul>

      {selectedGroup && (
  <div>
    <h2>Schedule for {selectedGroup}:</h2>
    <ul>
      {groupSchedule.map((scheduleItem, index) => (
        <li key={index}>
          {JSON.stringify(scheduleItem)} {/* Вывести JSON-представление объекта */}
        </li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
}

export default Testapp;
