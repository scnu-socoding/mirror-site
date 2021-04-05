const os_list = {
  data() {
    return {
      full_support_os: [
        { 
          name: 'Arch Linux',
          description: 'Arch Linux 是通用 x86-64 GNU/Linux 发行版。Arch 采用滚动升级模式，尽全力提供最新的稳定版软件。初始安装的 Arch 只是一个基本系统，随后用户可以根据自己的喜好安装需要的软件并配置成符合自己理想的系统。',
          tags: [
            {
              text: '自动同步',
              color: 'mdl-chip mdl-color--green'
            }
          ]
        }
      ]
    }
  }
}

Vue.createApp(os_list).mount('#os-list')
