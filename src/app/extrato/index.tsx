import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import imginicio from './../../../assets/imgs/Inicio.png'
import imgextrato from './../../../assets/imgs/Extrato.png'
import imgpix from './../../../assets/imgs/Pix_menu.png'
import imgmenu from './../../../assets/imgs/Menu.png'
import Cartao from 'react-native-vector-icons/Entypo'
import Pix from 'react-native-vector-icons/MaterialIcons'
import Extrato from 'react-native-vector-icons/FontAwesome5'
import Comprovante from 'react-native-vector-icons/FontAwesome5'
import Saldo from 'react-native-vector-icons/EvilIcons'
import Minhaconta from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/AntDesign'
import { router } from 'expo-router';


export interface TelaExtratoProps {
}

export default function TelaExtrato(props: TelaExtratoProps) {

  const [exibir, setExibir] = React.useState(false);
  const [saldo, setSaldo] = React.useState('                        R$ 100');


  const menu = () => {
    router.replace('/menu')
  }

  const inicio = () => {
    router.replace('/inicio')
  }

  const extrato = () => {
    router.replace('/extrato')
  }

  const pix = () => {
    router.replace('/pix')
  }



  return (
    <View style={styles.container} >

      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.textHeader}>Extrato</Text>
      </View>

      <View style={{ padding: 10, justifyContent: 'space-around', flexDirection: 'column', width: 330, height: 55 }}>
        <Text style={{ fontSize: 14, fontWeight: 'bold', }}>Saldo Disponivel:{exibir ? saldo : '                    R$ *********'} </Text>

        <TouchableOpacity onPress={() => setExibir(!exibir)}>
          <Saldo style={styles.iconSaldo} name="eye" size={35} color='#000' />
        </TouchableOpacity>
      </View>

      <View style={styles.containersenha}>

        <View style={{}}>
          <Text>Seg, 27 de Maio</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.textMenu}>
            <Text>Pagamento via pix </Text>
            <Text >- R$ 777,00 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>

          <View style={styles.textMenu}>
            <Text>Recebimento via pix</Text>
            <Text >+ R$ 1500,00 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textMenu}>
            <Text>Pagamento via pix </Text>
            <Text >- R$ 77,00 </Text>
          </View>
        </TouchableOpacity>

        <View style={{}}>
          <Text>Ter, 28 de Maio</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.textMenu}>
            <Text>Pagamento via pix </Text>
            <Text >- R$ 500,00 </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.textMenu}>
            <Text>Recebimento via pix </Text>
            <Text >+ R$ 1800,00 </Text>
          </View>
        </TouchableOpacity>

      </View>













      <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
        <TouchableOpacity onPress={inicio}>
          <Image style={styles.imgRodape} source={imginicio}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={extrato}>
          <Image style={styles.imgRodape} source={imgextrato}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={pix}>
          <Image style={styles.imgRodape} source={imgpix}></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={menu} >
          <Image style={styles.imgRodape} source={imgmenu}></Image>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 45,
    flex: 1,

  },
  header: {
    justifyContent: 'space-between',
    width: 320,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40

  },
  logo: {
    width: 70,
    height: 70,


  },
  textHeader: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: 'bold',
    top: 25,
    right: 120

  },
  iconSaldo: {
    position: 'absolute',
    right: 1,
    bottom: 6

  },
  iconPagamento: {
    position: 'absolute',
    bottom: 35,
    right: 55
  },

  botaopagamento: {
    justifyContent: 'flex-end',
    width: 156,
    height: 100,
    backgroundColor: '#BDF8E2',
    borderRadius: 15,

  },
  pagamento: {
    width: 78,
    height: 56,
    left: 6
  },
  imgCofrinho_Emprestimo: {
    position: 'absolute',
    width: 45,
    height: 45,
    left: 55,
    bottom: 35
  },
  imgRodape: {
    width: 60,
    height: 70
  },
  containersenha: {
    shadowOpacity: 0.2,
    width: 325,
    height: 360,
    fontSize: 14,
    marginTop: 25,
    marginBottom: 113,



  },
  textMenu: {
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 16,
    width: 325,
    height: 65,
    backgroundColor: '#BDF8E2',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  imgMenu: {
    position: 'absolute',
    bottom: 10,

  },


});