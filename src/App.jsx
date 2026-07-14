import { useState, useEffect } from 'react';
import Header from "./components/Header";
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import SearchBar from './components/SearchBar';
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import './App.css';
export default function RVSPManagerApp() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
  });

  const [errors, setErrors] = useState({});

  const [submittedData, setSubmittedData] = useState(() => {
    const savedPlayers = localStorage.getItem("players");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  const [editId, setEditId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortStatus, setSortStatus] = useState('asc');
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const filteredPlayers = submittedData.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).filter((player) => {
    if (filterStatus === 'attending') {
      return player.isAttending;
    } else if (filterStatus === 'notAttending') {
      return !player.isAttending;
    } else {
      return true;
    }
  }).sort((a, b) => {
    if (sortStatus === 'asc') {
      // A to Z text sorting
      return a.name.localeCompare(b.name);
    }
    if (sortStatus === 'desc') {
      // Z to A text sorting
      return b.name.localeCompare(a.name)
    }
    if (sortStatus === 'attending') {
      // True (attending) goes first, False (not attending) goes Last
      return (b.isAttending ? 1 : 0) - (a.isAttending ? 1 : 0);
    }

    return 0; // Do nothing if no sort selected
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const validate = () => {
    const errors = {};

    const name = formData.name.trim();
    const role = formData.role.trim();

    if (!name) {
      errors.name = "Name is required.";
    } else if (
      submittedData.some(
        player => player.name.toLowerCase() === name.toLowerCase()
      )) {
      errors.name = "Player already exists.";

    }

    if (!role) {
      errors.role = "Role is required."
    } else if (role.length < 3) {
      errors.role = "Role must be at least 3 characters."
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate
    const errors = validate();

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setErrors({});

    if (editId !== null) {
      const updatedPlayers = submittedData.map((player) => {
        if (player.id === editId) {
          return {
            ...player,
            name: formData.name,
            role: formData.role
          }
        }
        return player;
      });

      setSubmittedData(updatedPlayers);
      setEditId(null);
    } else {
      const newFormData = {
        id: Date.now(),
        name: formData.name,
        role: formData.role,
        isAttending: false
      }

      setSubmittedData((prevData) => [...prevData, newFormData]);
    }

    setFormData({
      name: '',
      role: ''
    });

    setSelectedPlayers([]);
  }

  const handleRSVP = (idToToggle) => {
    const updatedData = submittedData.map((player) => {
      if (player.id === idToToggle) {
        return {
          ...player,
          isAttending: !player.isAttending,
        }
      }
      return player;
    });
    setSubmittedData(updatedData);
  }

  const handleRemove = (idToRemove) => {
    const updatedData = submittedData.filter((player) => player.id !== idToRemove);
    setSubmittedData(updatedData);
    setSelectedPlayers(selectedPlayers.filter(id => id !== idToRemove));
  }

  const handleEdit = (idToEdit) => {
    const playerToEdit = submittedData.find((player) => player.id === idToEdit);

    if (playerToEdit) {
      setFormData({
        name: playerToEdit.name,
        role: playerToEdit.role
      });

      setEditId(idToEdit);
    }
  }

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  }

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  }

  const handleSortChange = (e) => {
    setSortStatus(e.target.value);
  }

  const handleSelectPlayer = (playerId) => {
    console.log("Selected Players:", selectedPlayers);
    setSelectedPlayers(prev => {
      if (prev.includes(playerId)) {
        return prev.filter(id => id !== playerId);
      } else {
        return [...prev, playerId];
      }
    });
  }

  const handleSelectAll = () => {
    if (selectedPlayers.length === filteredPlayers.length && filteredPlayers.length > 0) {
      // If all are selected, deselect all
      setSelectedPlayers([]);
    } else {
      // Select all visible players
      setSelectedPlayers(filteredPlayers.map(player => player.id));
    }
  }

  const clearForm = () => {
    setFormData({
      name: '',
      role: ''
    });
    setEditId(null);
  }

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(submittedData))
  }, [submittedData]);

  const totalPlayers = submittedData.length;
  const totalAttending = submittedData.filter(player => player.isAttending).length;
  const totalNotAttending = totalPlayers - totalAttending;
  const attendanceRate = totalPlayers === 0 ? 0 : (totalAttending / totalPlayers) * 100;

  return (

    <>
      <Header />

      <main className="max-w-[1280px] mx-auto px-6 py-8 space-y-8">
        <Stats totalPlayers={totalPlayers}
          totalAttending={totalAttending}
          totalNotAttending={totalNotAttending}
          attendanceRate={attendanceRate} />
        <PlayerForm formData={formData}
          errors={errors}
          editId={editId}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          clearForm={clearForm} />
        <SearchBar searchQuery={searchQuery}
          filterStatus={filterStatus}
          sortStatus={sortStatus}
          handleSearchChange={handleSearchChange}
          handleFilterChange={handleFilterChange}
          handleSortChange={handleSortChange} />
        <PlayerList
          players={filteredPlayers}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          handleRSVP={handleRSVP}
          selectedPlayers={selectedPlayers}
          handleSelectAll={handleSelectAll}
          handleSelectPlayer={handleSelectPlayer}
        />
      </main>
      <Footer />
    </>
  )
}