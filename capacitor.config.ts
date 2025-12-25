import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'games.wenzi.ogame',
  appName: 'OGame Vue Ts',
  webDir: 'docs',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined
    },
    // 禁用 WebView 文本缩放，防止系统字体设置影响布局
    webContentsDebuggingEnabled: false,
    allowMixedContent: false
  },
  plugins: {
    // 禁用键盘自动调整视口
    Keyboard: {
      resize: 'none'
    }
  }
}

export default config
