// app/_layout.tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* 👇 Each screen inside app/ is auto registered */}
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="+not-found" 
        options={{ title: "Oops! Page not found" }} 
      />
    </Stack>
  );
}

