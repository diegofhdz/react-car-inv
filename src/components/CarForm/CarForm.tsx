import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, chooseYear } from '../../redux/slices/RootSlice';
import { Button, Input } from '@mui/material';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
  id?: string,
  data?: {}
}

interface CarState {
  make: string,
  model: string,
  year_: number
};

export const CarForm = (props: CarFormProps) => {
  const dispatch = useDispatch();
  let { carData, getData } = useGetData();
  const store = useStore();
  const make = useSelector<CarState>(state => state.make);
  const { register, handleSubmit } = useForm({ });


  const onSubmit = (data: any, event: any) => {
    console.log(props.id!);
    console.log(JSON.stringify(data));
    if (props.id!) {
      server_calls.update(props.id, data);
      console.log(`Updated car with id: ${props.id} ${data.year_}`);
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseMake(data.make));
      dispatch(chooseModel(data.model));
      dispatch(chooseYear(data.year));
      server_calls.create(store.getState());
      setTimeout(() => {window.location.reload()}, 1000);
    }
  } 
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="make">Make</label>
        <Input {...register('make', {required: true} )} type="text" name="make" placeholder="Make" />
      </div>
      <div>
        <label htmlFor="model">Model</label>
        <Input {...register('model', {required: true} )} type="text"  name="model" placeholder="Model" />
      </div>
      <div>
        <label htmlFor="year_">Year</label>
        <Input {...register('year_', { valueAsNumber:true, required: true})} type="text" name="year_" placeholder="Year" />
      </div>
      <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
