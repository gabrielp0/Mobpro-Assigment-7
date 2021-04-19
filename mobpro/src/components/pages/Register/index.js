/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Axios from 'axios';


const Register = () => {
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    const handleSubmit = () => {
        const AddUser = {
            avatar: 'https://reqres.in/img/faces/11-image.jpg',
            first_name: first_name,
            last_name: last_name,
            email:  email,
        };
        Axios.post('http://10.0.2.2:3004/users', AddUser);
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Gap height={40} />
      <TextInput value = {email} label="Email" placeholder="Masukan Email anda"
          onChangeText = {event => setEmail(event)}
      />
      <Gap height={24} />
      <TextInput value = {first_name} label="First Name" placeholder="Masukan First Name anda"
          onChangeText = {event => setFirstName(event)}
      />
      <Gap height={48} />
      <TextInput value = {last_name} label="Last Name" placeholder="Masukan Last Name anda"
          onChangeText = {event => setLastName(event)}
      />
      <Gap height={48} />
      <Button label="Submit" onSubmit = {handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export default Register;
