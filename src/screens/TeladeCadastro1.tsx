import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type RootStackParamList = {
  TeladeCadastro1: undefined;
  TeladeCadastro2: { userId: number };
  TeladeLogin: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TeladeCadastro1'>;

const TeladeCadastro1: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation<NavigationProps>();

  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://103.199.184.26:3020/users', {
        nome,
        email,
        senha,
      });

      const novoUsuario = response.data;

      if (response.status === 201 || response.status === 200) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        navigation.navigate('TeladeCadastro2', {
          userId: novoUsuario.codigo,
        });
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro');
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 409) {
          Alert.alert('Erro', 'Este email já está em uso.');
        } else {
          Alert.alert('Erro', 'Não foi possível realizar o cadastro');
        }
      } else {
        Alert.alert('Erro de conexão', 'Verifique sua internet e tente novamente.');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Seja bem-vindo!</Text>
        <Text style={styles.subtitle}>Crie sua conta</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              value={senha}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99xDP8PKu40N2JY/eye-slas.png' }} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>  
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TeladeLogin')}>  
          <Text style={styles.loginText}>
            Já tem uma conta? <Text style={styles.loginLink}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
container: {
  flexGrow: 1, // Permite que o conteúdo ocupe o espaço necessário
  justifyContent: 'center', // Centraliza verticalmente se desejar
  padding: 24,
  backgroundColor: '#FFFFFF',
},

  headerContainer: {
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    color: '#121212',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#5F5F63',
    marginTop: 8,
  },
  formContainer: {
    gap: 16,
    marginBottom: 32,
  },
  inputGroup: {
    gap: 4,
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '600',
    color: '#121212',
  },
  input: {
    height: 48,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 40,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: '#777',
  },
  bottomContainer: {
    alignItems: 'center',
    gap: 24,
  },
  button: {
    backgroundColor: '#C8E6C9',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 32,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#121212',
    fontWeight: '600',
  },
  loginText: {
    color: '#888',
  },
  loginLink: {
    color: '#388E3C',
    fontWeight: 'bold',
  },
});

export default TeladeCadastro1;
