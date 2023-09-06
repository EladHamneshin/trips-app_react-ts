import { SubmitHandler, useForm } from 'react-hook-form'
import Trip from '../models/Trip'
import { createTrip } from '../services/tripService'


type Props = {}

export default function NewTripForm({}: Props) {
  const { register, handleSubmit } = useForm<Trip>()
  const onSubmit: SubmitHandler<Trip> = (trip) => createTrip({...trip, activities: ["ac1", "ac2"]}).then((trip) => console.log(trip)).catch((err) => console.log(err.message))

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='name' {...register("name") }/>
        <input placeholder='description'  {...register("description") } />
        <input  placeholder='destination' {...register("destination") } />
        <input  placeholder='startDate' {...register("startDate") }/>
        <input  placeholder='endDate' {...register("endDate") }/>
        <input placeholder='image url' type='url' {...register("image") }/>
        <input placeholder='price' type='number' {...register("price") }/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}