import { MaterialCommunityIcons } from '@expo/vector-icons';

// Navigation parameter types
export type RootTabParamList = {
  Home: undefined;
  Scan: undefined;
};

// Icon name type for MaterialCommunityIcons
export type IconName = keyof typeof MaterialCommunityIcons.glyphMap;
