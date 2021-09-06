import * as React from 'react';
import {Controller} from 'react-hook-form';
import {
  Wrapper,
  LogoWrapper,
  LogoImg,
  UserInput,
  ButtonWrapper,
  LoginButton,
  SocialLoginButton,
} from './TopBar.style';

const TopBarUi = (props: any) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg source={require('../imgs/logo.png')} />
      </LogoWrapper>
      <Controller
        control={props.control}
        name="Email"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(data) => onChange(data)}
            value={value}
            placeholder="이메일을 입력해주세요"
          />
        )}
      />
      <Controller
        control={props.control}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
        name="Password"
        rules={{required: true}}
      />
      <ButtonWrapper onPress={props.handleSubmit(props.onSubmit)}>
        <LoginButton>{'로그인'}</LoginButton>
      </ButtonWrapper>
      <ButtonWrapper onPress={props.handleSubmit(props.onSubmit)}>
        <SocialLoginButton>{'소셜로그인'}</SocialLoginButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
export default TopBarUi;
