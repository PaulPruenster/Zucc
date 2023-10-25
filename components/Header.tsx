import { View, ViewProps, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"

export default function Header(props: ViewProps) {
    const theme = useTheme()
    const { children, style, ...otherProps } = props

    return (
        <View {...otherProps} style={[{ backgroundColor: theme.colors.primary }, styles.view, style]} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#008080',
        padding: 20, alignItems: "center",
        width: '100%',
        gap: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
})