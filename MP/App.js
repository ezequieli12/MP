// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function App() {
  const [recipient, setRecipient] = useState('Jiansheng Wu');
  const [amount, setAmount] = useState('2.350');
  const [editingRecipient, setEditingRecipient] = useState(false);
  const [editingAmount, setEditingAmount] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: '#4CAF50' }} contentContainerStyle={styles.container}>
      {/* Close Button */}
      <View style={styles.topRightButton}>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Transfer Card */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <View style={{ flex: 1, marginRight: 16 }}>
            <Text style={styles.title}>¡Listo! Le transferiste a</Text>
            {editingRecipient ? (
              <TextInput
                value={recipient}
                onChangeText={setRecipient}
                onBlur={() => setEditingRecipient(false)}
                autoFocus
                style={styles.editText}
              />
            ) : (
              <TouchableOpacity onPress={() => setEditingRecipient(true)}>
                <Text style={styles.name}>{recipient}</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.subtitle}>A su cuenta de Mercado Pago</Text>
          </View>

          <View style={styles.avatarWrapper}>
            <View style={styles.avatar} />
            <View style={styles.checkMark}>
              <Ionicons name="checkmark" size={10} color="white" />
            </View>
          </View>
        </View>
      </View>

      {/* Amount Card */}
      <View style={styles.card}>
        <View style={[styles.row, { marginBottom: 16 }]}>
          <View style={styles.circleYellow}>
            <Feather name="credit-card" size={20} color="black" />
          </View>
          <View>
            {editingAmount ? (
              <TextInput
                value={amount}
                onChangeText={setAmount}
                onBlur={() => setEditingAmount(false)}
                keyboardType="numeric"
                autoFocus
                style={styles.editText}
              />
            ) : (
              <TouchableOpacity onPress={() => setEditingAmount(true)}>
                <Text style={styles.amount}>$ {amount}</Text>
              </TouchableOpacity>
            )}
            <Text style={styles.subtitle}>Dinero disponible</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Feather name="share-2" size={18} color="white" style={{ marginRight: 6 }} />
          <Text style={styles.primaryButtonText}>Compartir comprobante</Text>
        </TouchableOpacity>
      </View>

      {/* Protection Card */}
      <View style={styles.card}>
        <View style={styles.borderBottom}>
          <View style={styles.row}>
            <View style={styles.circleYellow}>
              <MaterialIcons name="security" size={22} color="black" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.protectTitle}>Protección para tu cuenta</Text>
              <Text style={styles.subtitle}>Por $1.544 sumá el Seguro de Protección Integral.</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.rowBetween}>
          <Text style={styles.link}>Saber más</Text>
          <Feather name="chevron-right" size={20} color="#3b82f6" />
        </TouchableOpacity>
      </View>

      {/* Bottom Buttons */}
      <View style={{ marginTop: 16, width: '100%' }}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Hacer otra transferencia</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    alignItems: 'center',
  },
  topRightButton: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    width: '100%',
    marginBottom: 16,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  subtitle: {
    color: '#666',
    fontSize: 13,
  },
  avatarWrapper: {
    position: 'relative',
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  checkMark: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleYellow: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFEB3B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  primaryButton: {
    flexDirection: 'row',
    backgroundColor: '#2979FF',
    paddingVertical: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  borderBottom: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 12,
  },
  protectTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  link: {
    color: '#3b82f6',
    fontWeight: '500',
    fontSize: 15,
  },
  secondaryButton: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: '#3b82f6',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  editText: {
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 2,
    marginBottom: 4,
    minWidth: 100,
  },
});
