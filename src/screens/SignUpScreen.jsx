import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Button, Input, Text, CheckBox } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={require('../../assets/image/sign-up.jpg')} style={styles.signInImage} />
        </View>
        <View>
          <Input
            placeholder="FullName"
            errorStyle={{ color: 'red' }}
            errorMessage="Please enter a fullname"
          />
        </View>
        <View>
          <Input
            placeholder="Email"
            errorStyle={{ color: 'red' }}
            errorMessage="Please enter a valid email"
          />
        </View>
        <View>
          <Input placeholder="Password" secureTextEntry={true} />
        </View>
        <View>
          <Input placeholder="Age" />
        </View>
        <View style={{ alignSelf: 'flex-start', alignItems: 'flex-start' }}>
          <CheckBox center title="Male" checked={check1} onPress={() => setCheck1(!check1)} />
          <CheckBox center title="Female" checked={check2} onPress={() => setCheck2(!check2)} />
        </View>
        <View style={{ alignSelf: 'center' }}>
          <Button
            title="SIGN UP"
            color="success"
            buttonStyle={{
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: 'bold' }}
          />
        </View>
        <View>
          <Button color="#fff" onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>Already have an account?</Text>
            <Text style={{ textAlign: 'center', marginTop: 10, color: 'blue' }}> Sign In</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  signInImage: {
    width: '70%',
    height: 200,
  },
});
