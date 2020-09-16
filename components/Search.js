import React, { useState } from "react";

import { StyleSheet, Text, View, Button, InputText } from "react-native";

const Result = () => {
  const styles = StyleSheet.create({
   
  });

 
 
  return (
    <View style={styles.screen}>
    <InputText
      style={{
        margin: 10,
        elevation: 7,
      }}
      placeholder="city name"
      value={query}
      onChangeText={(location) => setQuery(location)}
    />
    <View style={styles.btn}>
      <Button title="Find" onPress={search} color="#00aaff" />
    </View>
    {typeof weather.main != "undefined" ? (
      <View>
        <View>
          <Text style={{ fontSize: 30 }}>
            Place :{weather.name},{weather.sys.country}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>
            Temperature: {weather.main.temp}&deg;
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>
            Description: {weather.weather[0].main}
          </Text>
        </View>
      </View>
    ) : (
      <Text style={styles.ifText}>Find weather in your city</Text>
    )}
  </View>
  );
};

export default Result;
