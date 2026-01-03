import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <View className="flex-1 items-center justify-center px-6 py-16">
        {/* App Title */}
        <Text className="mb-2 text-center text-4xl font-bold text-gray-800">
          MediExplain AI
        </Text>
        <Text className="mb-8 text-center text-lg text-gray-600">
          Your Personal Medical Assistant
        </Text>

        {/* Coming Soon Badge */}
        <View className="mb-12 rounded-full bg-blue-500 px-8 py-3">
          <Text className="text-center text-base font-semibold text-white">
            Coming Soon
          </Text>
        </View>

        {/* Features Section */}
        <View className="w-full max-w-md space-y-6">
          <Text className="mb-6 text-center text-xl font-semibold text-gray-800">
            What We're Building
          </Text>

          {/* Feature 1: Upload */}
          <View className="flex-row items-start space-x-4 rounded-2xl bg-white p-5 shadow-sm">
            <View className="mt-1 h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Ionicons name="cloud-upload-outline" size={24} color="#3B82F6" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-semibold text-gray-800">
                Upload Medical Reports
              </Text>
              <Text className="text-sm text-gray-600">
                Simply upload your medical reports and lab results
              </Text>
            </View>
          </View>

          {/* Feature 2: AI Analysis */}
          <View className="flex-row items-start space-x-4 rounded-2xl bg-white p-5 shadow-sm">
            <View className="mt-1 h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <Ionicons name="sparkles-outline" size={24} color="#A855F7" />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-semibold text-gray-800">
                AI-Powered Analysis
              </Text>
              <Text className="text-sm text-gray-600">
                Get your medical data analyzed and explained in simple words
              </Text>
            </View>
          </View>

          {/* Feature 3: Export */}
          <View className="flex-row items-start space-x-4 rounded-2xl bg-white p-5 shadow-sm">
            <View className="mt-1 h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Ionicons
                name="document-text-outline"
                size={24}
                color="#10B981"
              />
            </View>
            <View className="flex-1">
              <Text className="mb-1 text-lg font-semibold text-gray-800">
                Export as PDF
              </Text>
              <Text className="text-sm text-gray-600">
                Download and share your explained reports easily
              </Text>
            </View>
          </View>
        </View>

        {/* Footer Message */}
        <View className="mt-16 rounded-xl bg-blue-50 p-6">
          <Text className="text-center text-sm text-gray-700">
            We're working hard to bring you the best medical assistant
            experience. Stay tuned!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
