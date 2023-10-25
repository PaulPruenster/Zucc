import { View, ViewProps, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"

export default function BaseView(props: ViewProps) {
    const theme = useTheme()
    const { children, style, ...otherProps } = props

    return (
        <View {...otherProps} style={[{ backgroundColor: theme.colors.background }, styles.view, style]} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    view: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' }
})