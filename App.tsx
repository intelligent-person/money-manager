import React from "react";
import {ThemeProvider} from "@emotion/react";
import {theme} from "./src/styles/Theme";
import {QueryClient, QueryClientProvider, focusManager} from 'react-query';
import Routes from "./src/Routes";
import {Platform} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {queryClient, useAppState, useOnlineManager } from "./src/utils/react-query";

function onAppStateChange(status: string) {
  // React Query already supports in web browser refetch on window focus by default
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export default function App() {
  useOnlineManager();

  useAppState(onAppStateChange);

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Routes/>
        </ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
