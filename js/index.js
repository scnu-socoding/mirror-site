const os_list = {
  data() {
    return {
      supported_os: [
        {
          name: 'Arch Linux',
          description: 'Arch Linux 是通用 x86-64 GNU/Linux 发行版。Arch 采用滚动升级模式，尽全力提供最新的稳定版软件。初始安装的 Arch 只是一个基本系统，随后用户可以根据自己的喜好安装需要的软件并配置成符合自己理想的系统。',
          tags: [
            {
              text: '自动同步',
              color: 'mdl-chip mdl-color--green'
            }, {
              text: '全量同步',
              color: 'mdl-chip mdl-color--green'
            }, {
              text: '上游 BFSU',
              color: 'mdl-chip mdl-color--primary'
            }, {
              text: '官方软件源最后同步时间 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '官方软件源同步状态 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '中文社区软件源最后同步时间 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '中文社区软件源同步状态 未知',
              color: 'mdl-chip mdl-color--grey'
            }
          ],
          links: [
            {
              text: '官方软件源',
              link: '/archlinux/'
            }, {
              text: '官方软件源使用文档',
              link: '//socoding.cn/t/topic/305'
            }, {
              text: '中文社区软件源',
              link: '/archlinuxcn/'
            }, {
              text: '中文社区软件源使用文档',
              link: '//socoding.cn/t/topic/306'
            }, {
              text: '安装介质',
              link: '/archlinux/iso/latest/'
            }
          ]
        },
        {
          name: 'Debian',
          description: 'Debian 是完全由自由软件组成的类 UNIX 操作系统，其包含的多数软件使用 GNU 通用公共许可协议授权，并由志愿者对其进行打包、开发与维护。Debian 以其坚守 UNIX 和自由软件的精神，以及其给予用户的众多选择而闻名。',
          tags: [
            {
              text: '自动同步',
              color: 'mdl-chip mdl-color--green'
            }, {
              text: '仅收录 amd64 架构',
              color: 'mdl-chip mdl-color--orange'
            }, {
              text: '仅收录最新稳定版',
              color: 'mdl-chip mdl-color--orange'
            }, {
              text: '上游 TUNA',
              color: 'mdl-chip mdl-color--primary'
            }, {
              text: '主软件源最后同步时间 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '主软件源同步状态 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '更新软件源最后同步时间 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '更新软件源同步状态 未知',
              color: 'mdl-chip mdl-color--grey'
            }
          ],
          links: [
            {
              text: '主软件源',
              link: '/debian/'
            }, {
              text: '更新软件源',
              link: '/debian-security/'
            }, {
              text: '使用文档',
              link: '//socoding.cn/t/topic/308'
            }, {
              text: '安装介质 (手动同步)',
              link: '/debian-cd/'
            }
          ]
        },
        {
          name: 'Manjaro',
          description: 'Manjaro 是一款派生自 Arch Linux 的发行版，和 Arch Linux 一样采用滚动升级模式，注重用户友好性和可访问性。',
          tags: [
            {
              text: '自动同步',
              color: 'mdl-chip mdl-color--green'
            }, {
              text: '全量同步',
              color: 'mdl-chip mdl-color--green'
            }, {
              text: '上游 BFSU',
              color: 'mdl-chip mdl-color--primary'
            }, {
              text: '最后同步时间 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '同步状态 未知',
              color: 'mdl-chip mdl-color--grey'
            }
          ],
          links: [
            {
              text: '软件源',
              link: '/manjaro/'
            }, {
              text: '使用文档',
              link: '//socoding.cn/t/topic/309'
            }
          ]
        }, {
          name: 'Ubuntu',
          description: 'Ubuntu 是一个基于 Debian 的 GNU/Linux 发行版，包含了常用的大量软件包。Ubuntu 的目标在于为一般用户提供一个最新同时又相当稳定，主要以自由软件建构而成的作业系统。Ubuntu 目前具有庞大的社群力量支持，用户可以方便地从社群获得帮助。',
          tags: [
            {
              text: '自动同步',
              color: 'mdl-chip mdl-color--green'
            }, {
              text: '仅收录 amd64 架构',
              color: 'mdl-chip mdl-color--orange'
            }, {
              text: '仅收录最新稳定版和最新 LTS 版',
              color: 'mdl-chip mdl-color--orange'
            }, {
              text: '上游 TUNA',
              color: 'mdl-chip mdl-color--primary'
            }, {
              text: '最后同步时间 未知',
              color: 'mdl-chip mdl-color--grey'
            }, {
              text: '同步状态 未知',
              color: 'mdl-chip mdl-color--grey'
            }
          ],
          links: [
            {
              text: '软件源',
              link: '/ubuntu/'
            }, {
              text: '使用文档',
              link: '//socoding.cn/t/topic/307'
            }, {
              text: '安装介质 (手动同步)',
              link: '/ubuntu-releases/'
            }
          ]
        }, {
          name: '其他 Linux 发行版安装介质',
          description: '由于资源有限，我们只能为少量 Linux 发行版提供软件源镜像服务。对于无法完全照顾到的流行发行版，我们将尽可能地提供安装介质的镜像服务。',
          tags: [
            {
              text: '手动同步',
              color: 'mdl-chip mdl-color--red'
            }, {
              text: '仅收录最新稳定版',
              color: 'mdl-chip mdl-color--orange'
            }
          ],
          links: [
            {
              text: 'CentOS',
              link: '/centos/'
            }, {
              text: 'openSUSE',
              link: '/opensuse/distribution/leap/'
            }
          ]
        }, {
          name: '常见应用安装程序',
          description: '数值分析、程序开发和虚拟化工具。',
          tags: [
            {
              text: '手动同步',
              color: 'mdl-chip mdl-color--red'
            }, {
              text: '仅收录最新稳定版',
              color: 'mdl-chip mdl-color--orange'
            }
          ],
          links: [
            {
              text: 'Code Blocks',
              link: '/codeblocks/Binaries/'
            }, {
              text: 'Jetbrains',
              link: '/jetbrains/'
            }, {
              text: 'Matlab',
              link: '/matlab/'
            }, {
              text: 'Orwell Dev-Cpp',
              link: '/orwelldevcpp/Setup Releases/'
            }, {
              text: 'VirtualBox',
              link: '/virtualbox/'
            }
          ]
        }
      ]
    }
  }
}

Vue.createApp(os_list).mount('#os-list')
