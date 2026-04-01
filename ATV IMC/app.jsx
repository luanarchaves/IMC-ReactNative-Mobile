import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

function calcularIMC() {
  const resultado = peso / (altura * altura);
  const valor = resultado.toFixed(2);
  setImc(valor);

  if (resultado < 18.5) {
    setClassificacao("Magreza");
  } else if (resultado < 25) {
    setClassificacao("Normal");
  } else if (resultado < 30) {
    setClassificacao("Sobrepeso");
  } else if (resultado < 40) {
    setClassificacao("Obesidade");
  } else {
    setClassificacao("Obesidade Grave");
  }
  }

  return (
      <View
        style={{
          paddingVertical: 100,
          paddingHorizontal: 80
        }}
      >
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>      
        Calcular IMC
      </Text>
      <Text style={{ fontSize: 25, paddingTop: 20}}>      
        Peso (kg)
      </Text>
      <TextInput
        value={peso}
        onChangeText={setPeso}
      />

      <Text style={{ fontSize: 25, paddingTop: 20}}>      
        Altura (m)
      </Text>      
      <TextInput
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular" onPress={() => {peso && altura != "" ? calcularIMC() : alert("Os dois campos devem estar preenchidos")}}     style={{paddingTop: 80}}/>

      {imc && <Text style={{ fontSize: 25, paddingTop: 20}}>Seu IMC: {imc} {"\n"} {classificacao}</Text>}
    </View>
  );
}