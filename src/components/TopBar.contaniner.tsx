import React from 'react';
import {useForm} from 'react-hook-form';
import {authService, firebaseInstance} from '../fbase';
import TopBarUi from './TopBar.presenter';

const TopBar = () => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      Email: '',
      Password: '',
    },
  });
  const onSubmit = (data: any) => {};
  console.log(errors);

  const onGoogleLogin = async (event: any) => {
    const {
      target: {name},
    } = event;
    let provider;
    if (name === 'Google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'Github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
  };

  return (
    <TopBarUi
      control={control}
      handleSubmit={handleSubmit}
      onGoogleLogin={onGoogleLogin}
    />
  );
};
export default TopBar;
