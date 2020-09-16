import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  Image,
} from "react-native";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=9ef537ee31e6f9969bafc569ac1e67ac`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");

        console.log(result);
      });
  };
  const ChangeTextHandler = (enteredText) => {
    setQuery(enteredText);
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00aaff" />
      <View style={styles.header}>
        <Text style={styles.title}> WEATHER APP</Text>
      </View>

      <TextInput
        style={{
          padding: 10,
          borderWidth: 1,
        }}
        placeholder="City name"
        value={query}
        onChangeText={ChangeTextHandler}
      />
      <View style={styles.btn}>
        <Button title="Find" onPress={search} color="#00aaff" />
      </View>
      {typeof weather.main != "undefined" ? (
        <View>
          <View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                margin: 1,

                backgroundColor: "#F3F2F2",

                flexDirection: "row",
              }}
            >
              <Image
                style={{
                  width: 120,
                  height: 120,
                }}
                source={{
                  uri:
                    "https://openweathermap.org/img/w/" +
                    weather.weather[0].icon +
                    ".png",
                }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                  }}
                >
                  Feels like : {weather.main.feels_like} &deg; C
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                  }}
                >
                  Humidity : {weather.main.humidity}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontStyle: "italic",
                  }}
                >
                  Pressure :{weather.main.pressure}
                </Text>
              </View>
            </View>
            <Text style={styles.weatherDetails}>
              Place :{weather.name},{weather.sys.country}
            </Text>
          </View>
          <View>
            <Text style={styles.weatherDetails}>
              Temperature: {weather.main.temp}&deg; C
            </Text>
          </View>
          <View>
            <Text style={styles.weatherDetails}>
              Description:
              {weather.weather[0].main}
            </Text>
          </View>
        </View>
      ) : (
        <Text style={styles.ifText}>Find weather in your city</Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#00aaff",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherDetails: {
    fontSize: 30,
    fontStyle: "italic",
    marginVertical: 10,
    textAlign: "center",
    borderWidth: 2,
  },
  ifText: {
    textAlign: "center",
    fontStyle: "italic",

    fontSize: 20,
  },
});

export default App;
