import React from 'react';
import {StyleSheet} from 'react-native';
import {AuthContainer} from '../components/AuthContainer';
import {Error} from '../components/Error';
import {FilledButton} from '../components/FilledButton';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {Loading} from '../components/Loading';
import {TextButton} from '../components/TextButton';
import {AuthContext} from '../contexts/AuthContext';

export default function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('naren.btech@gmail.com');
  const [password, setPassword] = React.useState('1$iRimQas');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  return (
    <AuthContainer>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={error} />
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
        title={'Login'}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            login(email, password);
            navigation.navigate('Details');
            setLoading(false);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
      <TextButton
        title={'Do you have an account? create one'}
        onPress={() => {
          navigation.navigate('Regitration');
        }}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    alignItems: 'center',
    backgroundColor: 'white',
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
});
