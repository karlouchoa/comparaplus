import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface ForgotPasswordProps {
  onBackPress?: () => void;
  onSubmit?: (email: string) => void;
}

export const EsqueciaSenha: React.FC<ForgotPasswordProps> = ({
  onBackPress = () => {},
  onSubmit = (email) => { console.log(email); },
}) => {
  const [email, setEmail] = React.useState('');
  const navigation = useNavigation<StackNavigationProp<any>>(); // Correção aqui: uso do hook useNavigation

  const handleSubmit = () => {
    onSubmit?.(email);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={onBackPress}
        >
          <Image
            source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-NHX94gt92eP1Wu/icon-a.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Esqueceu sua senha?</Text>

      {/* Illustration */}
      <Image
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-NHX94gt92eP1Wu/image-27.png' }}
        style={styles.illustration}
      />

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity 
        style={styles.submitButton}
        onPress={() => navigation.navigate('EsqueciaSenha2')} // Navegação corrigida
      >
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  header: {
    height: 20,
    justifyContent: 'center',
    
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    
    
  },
  backIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.72,
    lineHeight: 32,
    color: '#121212',
    marginTop: 32,
    top: -15,
  },
  illustration: {
    width: 320,
    height: 280,
    alignSelf: 'center',
    marginVertical: 20,
    top: -20,
  },
  formContainer: {
    gap: 6,
    marginTop: 20,
    top: -20,
  },
  label: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#121212',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#467A59',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
  },
  submitButton: {
    height: 48,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    top: -20,
  },
  buttonText: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#121212',
    textAlign: 'center',
  },
});

export default EsqueciaSenha;
