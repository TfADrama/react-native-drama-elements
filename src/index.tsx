import { NativeModules } from 'react-native';

type DramaElementsType = {
  getDeviceName(): Promise<string>;
};

const { DramaElements } = NativeModules;

export default DramaElements as DramaElementsType;
