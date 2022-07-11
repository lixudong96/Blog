import { defineConfig } from 'vitepress'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { getNav } from './theme/data'
import { getSidebar } from './theme/data/helper'

export default async () => {
  const sidebar = await getSidebar()
  return defineConfig({
    title: 'sunlee blog',
    description: 'A personal website of sunlee',
    lastUpdated: true,
    vite: {
      plugins: [Unocss({
        presets: [
          presetAttributify(),
          presetUno(),
        ],
      })],
    },
    markdown: {
      theme: 'one-dark-pro',
    },
    themeConfig: {
      footer: {
        message: '23333',
        copyright: 'Copyright © 2022-present sunlee',
      },
      nav: getNav(),
      socialLinks: [
        { icon: 'github', link: 'https://github.com/lixudong96/Blog' },
      ],
      // algolia: {
      //   appId: '1A68O7WT7B',
      //   indexName: 'blog',
      //   apiKey: '99f03532f79c78153623260e57e716f8',
      // },
      sidebar,
    },
  })
}
