import { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { Picker } from 'react-native';

export default function App() {
  const [produto, setProduto] = useState('');
  const [bebida, setBebida] = useState('');

  const produtos = {
    'Hambúrguer': {
      preco: 35,
      img: require('./assets/hamburguer.png')
    },
    'Pizza': {
      preco: 50,
      img: require('./assets/pizza.jpg')
    },
    'Hot Dog': {
      preco: 23,
      img: require('./assets/hotdog.jpeg')
    }
  };

  const bebidas = {
    'Refrigerante': {
      preco: 10,
      img: require('./assets/refri.png')
    },
    'Suco': {
      preco: 8,
      img: require('./assets/suco.jpg')
    },
    'Água': {
      preco: 5,
      img: require('./assets/agua.jpg')
    }
  };

  const total = (produtos[produto]?.preco || 0) + (bebidas[bebida]?.preco || 0);

  const confirmarPedido = () => {
    Alert.alert(
      'Pedido Confirmado',
      `Pedido: ${produto} + ${bebida}\nTotal: R$ ${total}`
    );
  };

  return (
    <View style={styles.app}>
      <Text style={styles.titulo}>Lanchonete</Text>

      <Text>Produto:</Text>
      <Picker selectedValue={produto} onValueChange={setProduto}>
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Hambúrguer" value="Hambúrguer" />
        <Picker.Item label="Pizza" value="Pizza" />
        <Picker.Item label="Hot Dog" value="Hot Dog" />
      </Picker>

      {produto !== '' && (
        <Image source={produtos[produto].img} style={styles.img} />
      )}

      <Text>Bebida:</Text>
      <Picker selectedValue={bebida} onValueChange={setBebida}>
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Refrigerante" value="Refrigerante" />
        <Picker.Item label="Suco" value="Suco" />
        <Picker.Item label="Água" value="Água" />
      </Picker>

      {bebida !== '' && (
        <Image source={bebidas[bebida].img} style={styles.img} />
      )}

      <Text style={styles.pedido}>
        Pedido: {produto} + {bebida}
      </Text>

      <Text style={styles.total}>
        Total: R$ {total}
      </Text>

      <Button title="Confirmar Pedido" onPress={confirmarPedido} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'darkred'
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginVertical: 10
  },
  pedido: {
    marginTop: 10,
    fontSize: 16
  },
  total: {
    fontSize: 18,
    color: 'green',
    marginVertical: 10
  }
});