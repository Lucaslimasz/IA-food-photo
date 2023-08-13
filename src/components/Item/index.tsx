import { Text, View } from "react-native";

import { styles } from "./styles";

export type ItemProps = {
  name: string;
  percentage: string;
};

type Props = {
  data: ItemProps;
};

export function Item({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: "#fff",
          height: "100%",
          width: `${data.percentage}%`,
          padding: 18,
          fontWeight: "700",
          color: '#000'
        }}
      >
        {data.name} - {data.percentage}
      </Text>
    </View>
  );
}
