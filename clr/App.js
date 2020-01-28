import  React,{ useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


 export default function App() {
  const [color, setColor] = useState("pink");
  const [bround, setBround] = useState("App");
  const [borderc, setBorderc]= useState('8px solid red');
  const [ch, setCh] = useState('gold');
  const [back, setBack] = useState('black');

  const changeColor = () => {
    if (color === "pink") {
      setColor("red");
      setBorderc('8px solid purple');
      setCh('purple');
      setBack('green');
    }
    if (color === "red") {
      setColor("orange");
      setBorderc('8px solid blue');
      setCh('blue');
      setBack('red');
      
    }
    if (color === "orange") {
      setColor("yellow");
      setBorderc('8px solid red')
      setCh('red')
      setBack('pink');
      
    }
    if (color === "yellow") {
      setColor("green");
      setBorderc('8px solid orange')
      setCh('orange')
      setBack('purple');
    }
    if (color === "green") {
      setColor("blue");
      setBorderc('8px solid yellow')
      setCh('yellow')
      setBack('orange');
    }
    if (color === "blue") {
      setColor("purple");
      setBorderc('8px solid green')
      setCh('green')
      setBack('white');
    }
    if (color === "purple") {
      setColor("red");
      setCh('red');
      setBack('gold');
    }
  }
    const changeBackground = () => {
    setBround("next");
    }
    
    return (
      
    <View
      onPress={() => {
        changeBackground()
      }}
      className={bround}
      style={{
        fontSize: "25px",
        backgroundColor: back,
        paddingBottom: "500px",
        paddingTop: "100px",
        border: borderc
      }}
    >
      <View style={{ color: ch , padding: '20%', flex: 1}}><Text>
        &darr;&darr;&darr;Lets Change The Colors &darr;&darr;&darr;</Text>
      </View>
      <View><Text
          style={{
            color: color,
            marginTop: 100,
            fontSize: "45px",
            marginBottom: 100,
            backgroundColor: "black",
            borderRadius: 10
          }}
          onPress={() => {
            changeColor();
          }}
        >
          CLICK ME CLICK ME CLICK ME CLICK ME !!
        </Text></View>
</View>
    
  )
 }
