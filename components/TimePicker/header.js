import LinearGradient from "react-native-linear-gradient";
import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "../../styles";
export default function Header() {
  return (
    <LinearGradient
      colors={["rgb(57, 123, 255)", "rgb(96, 220, 230)"]}
      style={styles.styles_header.header}
      start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View>
        <View style={styles.styles_header.header_left}>
          <Text style={styles.styles_header.title_header}>Báo thức</Text>
          <Text style={{ color: "#fff" }}>Have a nice day Mạnh</Text>
        </View>
        <View style={styles.styles_header.avatar}>
          <TouchableOpacity
            onPress={() => {
              alert("Xin chaof");
            }}
          >
            <Image
              source={{
                uri: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-vui-nhon.jpg",
              }}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
