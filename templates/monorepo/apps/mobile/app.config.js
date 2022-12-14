import 'dotenv/config';
import packages from './package.json';

const getAndroidVersionCode = (version) => {
  let [major, minor, patch] = version.split('.');
  if (major.length === 1) {
    major = `0${major}`;
  }
  if (minor.length === 1) {
    minor = `0${minor}`;
  }
  if (patch.length === 1) {
    patch = `0${patch}`;
  }
  return Number(`420${major}${minor}${patch}`);
};

const versionCode = getAndroidVersionCode(packages.version);

export default {
  name: 'My App',
  slug: 'my-app',
  runtimeVersion: {
    policy: 'sdkVersion',
  },
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#84a59d',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'eas configure',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    permissions: [],
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#84a59d',
    },
    versionCode,
    package: 'com.xxx.xxx',
    googleServicesFile: './google-services.json',
  },
  web: {
    favicon: './assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: 'xxx',
    },
  },
  plugins: [
    [
      'expo-notifications',
      {
        icon: './assets/notification-icon.png',
        color: '#ffffff',
      },
    ],
  ],
};
