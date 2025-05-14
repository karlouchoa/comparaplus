import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
  EsqueciaSenha: undefined;
  TeladeCadastro1: undefined;
  TelaInicial1: undefined;
  Home: undefined;
  Filtros: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

const TeladeLogin: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Função que fará a requisição de login
  const handleLoginRequest = async () => {
    try {
      // Validação básica
      if (!email || !password) {
        Alert.alert('Atenção', 'Por favor, preencha email e senha.');
        return;
      }

      // Monta o corpo da requisição
      const body = {
        email: email,
        senha: password,
      };

      // Faz a chamada HTTP (POST)
      const response = await fetch('http://103.199.184.26:3020/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        // Se o servidor retornar status >= 400 (ex: 401), pode mostrar erro
        Alert.alert('Erro', 'Falha ao fazer login. Verifique suas credenciais.');
        return;
      }

      // Tenta converter a resposta em JSON
      const data = await response.json();
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      console.log('Resposta do Servidor:', data);

      navigation.navigate('Filtros');

    } catch (error) {
      console.error(error);
      Alert.alert(
        'Erro',
        'Ocorreu um erro ao fazer login. Verifique sua conexão e tente novamente.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Entre na sua conta</Text>
      </View>

      <View style={styles.inputContainer}>
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('EsqueciaSenha')}
        style={styles.forgotPasswordButton}
      >
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {/* Agora o botão chama diretamente a função handleLoginRequest */}
      {/* <TouchableOpacity style={styles.loginButton} onPress={handleLoginRequest}> */}
      <TouchableOpacity style={styles.loginButton} 
                        // onPress={handleLoginRequest}
                        onPress={() => navigation.navigate('Home')}
                        > 
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton} onPress={() => {}}>
        <Text style={styles.exitButtonText}>Sair</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpContainer}
        onPress={() => navigation.navigate('TeladeCadastro1')}
      >
        <Text style={styles.signUpText}>Não tem uma conta? Inscreva-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 40,
    alignItems: 'center',  // centralizar o conteúdo do cabeçalho
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.72,
    lineHeight: 32,
    color: '#121212',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#5F5F63',
    marginBottom: 20,  // espaçamento entre o título e o próximo campo
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#121212',
    marginBottom: 6,
  },
  input: {
    height: 48,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 12,  // ajuste a posição do ícone
  },
  icon: {
    width: 24,
    height: 24,
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignSelf: 'center',  // centralizar o botão
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#467A59',
    textAlign: 'center',
  },
  loginButton: {
    height: 48,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#121212',
  },
  exitButton: {
    height: 48,
    backgroundColor: '#FAF9FD',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#C1DFC5',
  },
  exitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#3E6B4E',
  },
  signUpContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  
  signUpText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#A6A6A6',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 24,
//     paddingTop: 10,
//     justifyContent: 'center',
//   },
//   headerContainer: {
//     marginBottom: 40,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     letterSpacing: -0.72,
//     lineHeight: 32,
//     color: '#121212',
//     marginBottom: 8,
//     top: -50,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: '400',
//     lineHeight: 24,
//     color: '#5F5F63',
//     top: -55,
//   },
//   inputContainer: {
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '600',
//     lineHeight: 20,
//     color: '#121212',
//     marginBottom: 6,
//     top: -65,
//   },
//   input: {
//     height: 48,
//     backgroundColor: '#FAFAFA',
//     borderRadius: 8,
//     paddingHorizontal: 16,
//     fontSize: 14,
//     top: -65,
//   },
//   passwordContainer: {
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 12,
//     top: -53,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   forgotPasswordButton: {
//     marginTop: 10,
//     top: -75,
//   },
//   forgotPassword: {
//     fontSize: 14,
//     fontWeight: '600',
//     lineHeight: 20,
//     color: '#467A59',
//     textAlign: 'center',
//   },
//   loginButton: {
//     height: 48,
//     backgroundColor: '#C1DFC5',
//     borderRadius: 48,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//     top: -70,
//   },
//   loginButtonText: {
//     fontSize: 16,
//     fontWeight: '700',
//     letterSpacing: 0.3,
//     color: '#121212',
//   },
//   exitButton: {
//     height: 48,
//     backgroundColor: '#FAF9FD',
//     borderRadius: 48,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//     borderWidth: 1,
//     borderColor: '#C1DFC5',
//     top: -70,
//   },
//   exitButtonText: {
//     fontSize: 16,
//     fontWeight: '700',
//     letterSpacing: 0.3,
//     color: '#3E6B4E',
//   },
//   signUpContainer: {
//     marginTop: 16,
//     alignItems: 'center',
//     top: -70,
//   },
//   signUpText: {
//     fontSize: 16,
//     fontWeight: '500',
//     lineHeight: 24,
//     color: '#A6A6A6',
//   },
// });

export default TeladeLogin;
