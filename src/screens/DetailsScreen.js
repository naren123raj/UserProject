import React from 'react';
import {StyleSheet} from 'react-native';
import {AuthContainer} from '../components/AuthContainer';
import {Error} from '../components/Error';
import {FilledButton} from '../components/FilledButton';
import {Heading} from '../components/Heading';
import {IconButton} from '../components/IconButton';
import {Input} from '../components/Input';
import {AuthContext} from '../contexts/AuthContext';

export default function DetailsScreen({navigation}) {
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('kurapati_99@yahoo.com');
  const [password, setPassword] = React.useState('07112002');

  return (
    <AuthContainer>
      <Heading style={styles.title}>USER DETAILS</Heading>
      <IconButton
        style={styles.closeIcon}
        name={'close'}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Error error={''} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Register'}
        style={styles.loginButton}
        onPress={() => {
          register(email, password);
        }}
      />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: 'center',
  },
  input: {
    marginVertical: 8,
  },
  title: {
    marginBottom: 32,
  },
  loginButton: {
    marginVertical: 32,
  },
  closeIcon: {
    position: 'absolute',
    top: 1,
    left: 190,
  },
});
