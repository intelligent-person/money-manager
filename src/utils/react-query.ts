import {onlineManager, QueryClient} from "react-query";
import React, {useEffect} from "react";
import {AppState, Platform} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import {useFocusEffect} from "@react-navigation/native";

export const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

export function useOnlineManager() {
  React.useEffect(() => {
    // React Query already supports on reconnect auto refetch in web browser
    if (Platform.OS !== 'web') {
      return NetInfo.addEventListener((state) => {
        onlineManager.setOnline(
          state.isConnected != null &&
          state.isConnected &&
          Boolean(state.isInternetReachable)
        );
      });
    }
  }, []);
}

export function useAppState(onChange: any) {
  useEffect(() => {
    AppState.addEventListener('change', onChange);
    return () => {
      AppState.removeEventListener('change', onChange);
    };
  }, [onChange]);
}

export function useRefreshOnFocus(refetch: any) {
  const enabledRef = React.useRef(false);

  useFocusEffect(
    React.useCallback(() => {
      if (enabledRef.current) {
        refetch();
      } else {
        enabledRef.current = true;
      }
    }, [refetch])
  );
}