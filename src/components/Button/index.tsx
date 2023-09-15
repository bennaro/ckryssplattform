import React, { FunctionComponent, SVGProps } from "react";
import { SvgProps } from "react-native-svg";
import { GestureResponderEvent, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Fonts, Gradients } from "../../Styles/StyleGuide";


interface IBUttonProps {
    title: string;
    Icon?: FunctionComponent<SvgProps>;
    onPress?: (event: GestureResponderEvent) => void;

}

const Button: React.FC<IBUttonProps> = ({ title, Icon, onPress }) => {
    return(
    <TouchableOpacity onPress={onPress}>
        <Gradients.button style={styles.gradient}>
        <Text style={[Fonts.buttonTitle(), {color: "#fff"}]}>{title}</Text>
        {Icon && <Icon style={{ marginLeft: 16 }}/>}
        </Gradients.button>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gradient: {
    borderRadius: 8,
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 16,
    flexDirection: "row",
    marginTop: 16,
    },
});

export default Button;