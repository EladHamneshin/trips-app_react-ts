import axios from "axios";
import Trip from "../types/Trip";

const API_URL = 'http://localhost:3000/api';
const TOKEN = 'test-token'

export async function getTrips(): Promise<Trip[]> {
    return (await axios.get<Trip[]>(`${API_URL}/trips`)).data;
}

export async function getTrip(id: string): Promise<Trip> {
    return (await axios.get<Trip>(`${API_URL}/trips/${id}`)).data;
}

export async function updateTrip(trip: Trip): Promise<Trip> {
    return (await axios.put<Trip>(`${API_URL}/trips/${trip.id}`, trip, 
    {
        headers: {
          Authorization : TOKEN
          }
    })).data;
}
