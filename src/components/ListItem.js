import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { CardSection } from "./common";

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    return (
      <View>
        <CardSection>
          <Text style={titleStyle}>{this.props.library.item.title}</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default ListItem;
