import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const movies = [
  
  { id: 1, title: "Movie 1", image: "https://tse1.mm.bing.net/th?id=OIP.uSMlvpnWL_3RLx_O-b2LPwHaEo&pid=Api&rs=1&c=1&qlt=95&w=197&h=123" },
  { id: 2, title: "Movie 2", image: "https://tse3.mm.bing.net/th?id=OIP.F01XIg2UMahGMrZ--RbeqwHaJ6&pid=Api&P=0&h=180" },
  { id: 3, title: "Movie 3", image: "https://tse3.mm.bing.net/th?id=OIP.MJ8UdVmy7hm6SiBy3rS8pwAAAA&pid=Api&P=0&h=180" },
  { id: 4, title: "Movie 4", image: "https://tse2.mm.bing.net/th?id=OIP.A2FoAX5QsKm93P78CfKYEQHaD4&pid=Api&P=0&h=180" },
  
  
];

const MovieList = () => (
  <div className="grid grid-cols-4 gap-4 p-4">
    {movies.map(movie => (
      <Link key={movie.id} to={`/movie/${movie.id}`} className="border p-2 text-center">
        <img src={movie.image} alt={movie.title} className="w-full" />
        <h3>{movie.title}</h3>
      </Link>
    ))}
  </div>
);

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const navigate = useNavigate();

  return movie ? (
    <div className="p-4 text-center">
      <img src={movie.image} alt={movie.title} className="w-64 mx-auto" />
      <h2>{movie.title}</h2>
      <button onClick={() => navigate(`/book/${id}`)} className="bg-blue-500 text-white p-2 mt-4">Book Seat</button>
    </div>
  ) : <p>Movie not found</p>;
};

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/confirmation/${uuidv4()}`, { state: form });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col items-center">
      <input type="text" name="name" placeholder="Name"  style={{fontSize:"2vw"}} value={form.name} onChange={handleChange} className="border p-2 m-2" required />
      <br></br>
      <input type="email" name="email" placeholder="Email" style={{fontSize:"2vw"}} value={form.email} onChange={handleChange} className="border p-2 m-2" required />
      <br></br>
      <input type="tel" name="mobile" placeholder="Mobile" style={{fontSize:"2vw"}} value={form.mobile} onChange={handleChange} className="border p-2 m-2" required />
      <br></br>
      <button type="submit" className="bg-green-500 text-white p-2" style={{fontSize:"2vw",color:"red",textAlign:"center",marginTop:"10px"}}>Submit</button>
    </form>
  );
};

const Confirmation = ({ location }) => {
  const { id } = useParams();
  const state = location?.state;

  return state ? (
    <div className="p-4 text-center">
      <h2>Booking Confirmed!</h2>
      <p>Booking ID: {id}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  ) : <p>Error: No booking details found.</p>;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/book/:id" element={<BookingForm />} />
      <Route path="/confirmation/:id" element={<Confirmation />} />
    </Routes>
  </Router>
);

export default App;