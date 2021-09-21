import { Component } from '@vue/runtime-core';
import React, { ReactElement, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
}

const Hello: React.FC<Props> = ({ name }) => {
  // const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(baseEnthusiasmLevel);

  const onIncrement = () => 0;
  const onDecrement = () => 0;

  const getExclamationMarks = (numChars: number) => numChars > 0 ? Array(numChars + 1).join('!') : '';

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello{' '}
        {name}
        {/* {getExclamationMarks(enthusiasmLevel)} */}
      </Text>
      <View>
        <Button
          title="Increase enthusiasm"
          accessibilityLabel="increment"
          onPress={onIncrement}
          color="blue"
        />
        <Button
          title="Decrease enthusiasm"
          accessibilityLabel="decrement"
          onPress={onDecrement}
          color="red"
        />
        <Welcome other='xia' value={10}></Welcome>
      </View>
    </View>
  );
};

export type WelcomeProps = {
  other: string
  value: number
}

const Welcome: React.FC<WelcomeProps> = ({ other, value }) => {
  return (
    <View>
      <Text style={welcomeStyles.text}>{other.repeat(value)}</Text>
    </View>
  )
}

const welcomeStyles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'blue',
    backgroundColor: '#ff00ff',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

const FlexDimensions = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: 'powderblue' }}></View>
      <View style={{ flex: 3, backgroundColor: 'skyblue' }}></View>
      <View style={{ flex: 3, backgroundColor: 'steelblue' }}></View>
    </View>
  )
}

const PercentageDimensions = () => {
  return (<View style={{ height: '100%' }}>
    <View style={{ width: '25%', height: '25%', backgroundColor: 'powderblue' }}></View>
    <View style={{ width: '45%', height: '60%', backgroundColor: 'skyblue' }}></View>
    <View style={{ width: '80%', height: '100%', backgroundColor: 'steelblue' }}></View>
  </View >)
}

const FlexDirectionBasics = () => {
  const [flexDirection, setFlexDirection] = useState('column')
  return (
    <PreviewLayout
      label='flexDirection'
      values={['column', 'row', 'row-reverse', 'colum-reverse']}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}>
      <View
        style={[layoutStyles.box, { backgroundColor: "powderblue" }]}></View>
      <View
        style={[layoutStyles.box, { backgroundColor: "skyblue" }]}></View>
      <View
        style={[layoutStyles.box, { backgroundColor: "steelblue" }]}></View>
    </PreviewLayout>
  )
}


export type PreViewLayoutProps = {
  label: string,
  children?: React.ReactNode,
  values: string[],
  selectedValue: string,
  setSelectedValue: (value: string) => void,
}



const PreviewLayout: React.FC<PreViewLayoutProps> = ({ label, children, values, selectedValue, setSelectedValue }) => {

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={layoutStyles.text}>{label}</Text>
      <View style={layoutStyles.row}>
        {values.map((value) => (

          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[
              layoutStyles.buttonNormal,
              selectedValue == value && layoutStyles.buttonSelected
            ]}
          >
            <Text style={[
              layoutStyles.buttonTextNormal,
              selectedValue == value && layoutStyles.buttonTextSelected
            ]}>
              {value}
            </Text>
          </TouchableOpacity>

        ))}

        <View style={[layoutStyles.container, { [label]: selectedValue }]}>
          {children}
        </View>


      </View>

    </View>
  )
}


const layoutStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'aliceblue',

  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 80,
  },
  buttonNormal: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginHorizontal: '1%',
    marginVertical: 6,
    alignSelf: 'flex-start',
    backgroundColor: 'oldlace',
    borderRadius: 6,
    minWidth: '48%',

    textAlign: 'center',
  },
  buttonSelected: {
    backgroundColor: 'coral',
  },

  buttonTextSelected: {

    color: 'white'
  },
  buttonTextNormal: {
    textAlign: 'center',

    fontSize: 22,
    color: 'orange'
  },
  box: {
    width: 60,
    height: 60,

  }

})


export default FlexDirectionBasics;
