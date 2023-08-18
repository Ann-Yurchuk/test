import { useForm } from 'react-hook-form';
import { Forma, Label, Input, Button, Error } from './Form.styled';

export const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <Forma onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Label>
        First Name:
        <Input
          type="text"
          {...register('firstName', {
            required: "Поле обов'язкове для заповнення!",
            minLength: {
              value: 3,
              message: 'Поле вводу не може бути менше 3 символів',
            },
          })}
        />
      </Label>
      <Error style={{ height: 40 }}>
        {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
      </Error>
      <Label>
        Last Name:
        <Input
          type="text"
          {...register('lastName', {
            required: "Поле обов'язкове для заповнення!",
            minLength: {
              value: 3,
              message: 'Поле вводу не може бути менше 3 символів',
            },
          })}
        />
      </Label>
      <Error style={{ height: 40 }}>
        {errors?.firstName && <p>{errors?.lastName?.message || 'Error!'}</p>}
      </Error>
      <Label>
        Email:
        <Input
          type="email"
          {...register('email', {
            required: "Поле обов'язкове для заповнення!",
          })}
        />
      </Label>
      <Error style={{ height: 40 }}>
        {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
      </Error>
      <Button type="submit" disabled={!isValid}>
        Leave contacts
      </Button>
    </Forma>
  );
};
