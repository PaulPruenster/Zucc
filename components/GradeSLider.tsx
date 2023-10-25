import { Slider } from "@miblanchard/react-native-slider";
import { Text } from 'react-native-paper'
import { useEffect, useState } from "react";
import { View } from "react-native";

export type GradeFilter = {
    minGrade: string
    maxGrade: string
}

export default function GradeSlider(props: { onSlidingComplete: (selectedGrades: GradeFilter) => void }) {
    const [grade, setGrade] = useState([0, 1]);
    const [grades, setGrades] = useState<string[]>([]);

    useEffect(() => {
        // TODO api call for grades
        setGrades(['5a', '5b', '5c', '6a', '6b', '6c', '7a', '7b', '7c', '8a', '8b', '8c'])
    }, [])

    function mapValueToGrade(value: number) {
        const clampedValue = Math.max(0, Math.min(1, value));
        const idx = Math.round((grades.length - 1) * clampedValue);

        return grades[idx]
    }

    return (
        <View style={{ width: '100%', alignItems: "center" }}>
            <Slider
                value={grade}
                step={0.01}
                containerStyle={{ width: '90%' }}
                onValueChange={setGrade}
                onSlidingComplete={() => props.onSlidingComplete({
                    minGrade: mapValueToGrade(grade[0]),
                    maxGrade: mapValueToGrade(grade[1])
                })}
            />
            <View style={{ width: '90%', flexDirection: "row", justifyContent: "space-between" }}>

                <Text>{mapValueToGrade(grade[0])}</Text>
                <Text>{mapValueToGrade(grade[1])}</Text>
            </View>
        </View>
    )
}