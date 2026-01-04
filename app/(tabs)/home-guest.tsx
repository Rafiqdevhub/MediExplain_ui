import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from "expo-document-picker";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";

const FREE_UPLOAD_LIMIT = 1;

export default function HomeGuest() {
  const router = useRouter();
  const [uploadsUsed, setUploadsUsed] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadUploadCount();
  }, []);

  const loadUploadCount = async () => {
    const count = await AsyncStorage.getItem("guest_upload_count");
    setUploadsUsed(count ? Number(count) : 0);
  };

  const incrementUploadCount = async () => {
    const newCount = uploadsUsed + 1;
    setUploadsUsed(newCount);
    await AsyncStorage.setItem("guest_upload_count", String(newCount));
  };

  const handleUploadPress = async () => {
    if (uploadsUsed >= FREE_UPLOAD_LIMIT) {
      router.push("/(tabs)/login-gate");
      return;
    }

    try {
      setLoading(true);

      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*"],
        copyToCacheDirectory: true,
      });

      if (result.canceled) {
        setLoading(false);
        return;
      }

      const file = result.assets[0];

      await incrementUploadCount();

      router.push({
        pathname: "/(tabs)/uploading",
        params: { fileUri: file.uri, fileName: file.name },
      });
    } catch (error) {
      Alert.alert("Upload failed", "Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-center">
      {/* Free upload notice */}
      <Text className="text-sm text-gray-400 text-center mb-6">
        You can analyze one report without signing in.
      </Text>

      {/* Title */}
      <Text className="text-3xl font-semibold text-gray-900 text-center mb-3">
        Understand Your Medical Report
      </Text>

      {/* Subtitle */}
      <Text className="text-base text-gray-600 text-center mb-10">
        Upload your report and get a simple explanation in plain language.
      </Text>

      {/* Upload Button */}
      <Pressable
        onPress={handleUploadPress}
        disabled={loading}
        className={`py-4 rounded-xl ${loading ? "bg-gray-300" : "bg-blue-600"}`}
      >
        <Text className="text-white text-center text-lg font-medium">
          {loading ? "Preparing upload..." : "Upload Medical Report"}
        </Text>
      </Pressable>

      {/* File hint */}
      <Text className="text-xs text-gray-400 text-center mt-4">
        PDF or clear photo accepted
      </Text>

      {/* Reassurance */}
      <Text className="text-xs text-gray-400 text-center mt-10">
        Your report is processed securely and not shared.
      </Text>
    </View>
  );
}
