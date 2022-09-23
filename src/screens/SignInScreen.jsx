import { Image, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Button, Input, Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Image source={require('../../assets/image/sign-in.jpg')} style={styles.signInImage} />
        </View>
        <View>
          <Text h3 h3Style={{ textAlign: 'center', marginBottom: 20 }}>
            Naver forget yours note
          </Text>
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
        <View style={{ alignSelf: 'center' }}>
          <Button
            title="SIGN IN"
            color="warning"
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
          <Button color="#fff" onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>Don't have an account?</Text>
            <Text style={{ textAlign: 'center', marginTop: 10, color: 'blue' }}> Sign Up</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  signInImage: {
    width: '100%',
    height: 300,
  },
});
