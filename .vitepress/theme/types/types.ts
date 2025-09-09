import type { WalineProps } from '@waline/client/full'

/** 图标和图片的类型 */
export type IconMode = string | { light: string; dark: string }
/** 尺寸类型 */
export type SizeType = null | string | number
/** 链接类型 */
export type LinkType = string | undefined
/** Rel 属性类型 */
export type RelType = string | undefined
/** 目标类型 */
export type TargetType = string | undefined

export type IconType =
  | string
  | { icon: string; color?: IconMode }
  | { light: string; dark: string; color?: IconMode }
  | { svg: IconMode }

export type ImageType =
  | string
  | { src: string; crop?: boolean; [prop: string]: any }
  | { light: string; dark: string; crop?: boolean; [prop: string]: any }

/** Links */
export interface LinkItem {
  /** 名称 */
  name: string
  /** 描述 */
  desc?: string
  /** 链接 */
  link?: LinkType
  /** 链接地址描述文本 */
  linkText?: string
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 @default '32' */
  size?: SizeType
}

/** Promo ：表示一个具有活动性质的推广项 */
export interface Promo {
  /** 活动标题 */
  promo: string
  /** 跳转链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
  /** 附加信息1 */
  info1?: string
  /** 附加信息2 */
  info2?: string
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 @default '32' */
  size?: SizeType
}

/** Normal ：表示普通链接项 */
export interface Normal {
  /** 名称标题 */
  name: string
  /** 跳转链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
  /** 隐藏信息1（可用于鼠标悬停显示） */
  hide1?: string
  /** 隐藏信息2 */
  hide2?: string
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 图片和图标大小 @default '32' */
  size?: SizeType
}

/** Notice */
export interface NoticeItem {
  /** 链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
  /** 链接的标题 */
  title: string
  /** 链接的内容 */
  desc?: string
  /** 日期 */
  date?: string
  /** 日期文本 */
  dateText?: string
  /** 日期图标 @default 'heroicons:calendar-days' */
  dateIcon?: IconType
  /** 日期图片 */
  dateImage?: ImageType
}

/** Waline 配置数据类型 */
export interface WalineData {
  serverURL: WalineProps['serverURL']
  path?: string
  lang?: WalineProps['lang']
  locale?: WalineProps['locale']
  emoji?: WalineProps['emoji']
  commentSorting?: WalineProps['commentSorting']
  meta?: WalineProps['meta']
  requiredMeta?: WalineProps['requiredMeta']
  login?: WalineProps['login']
  wordLimit?: WalineProps['wordLimit']
  pageSize?: WalineProps['pageSize']
  imageUploader?: WalineProps['imageUploader']
  highlighter?: WalineProps['highlighter']
  texRenderer?: WalineProps['texRenderer']
  search?: WalineProps['search']
  noCopyright?: WalineProps['noCopyright']
  recaptchaV3Key?: WalineProps['recaptchaV3Key']
  turnstileKey?: WalineProps['turnstileKey']
  reaction?: WalineProps['reaction']
}

/** Footer */
export interface FooterData {
  i18n?: Record<string, Partial<Omit<FooterData, 'i18n'>>>
  /** 链接分组数组 */
  group?: Group[]
  /** 备案信息 */
  beian?: Beian
  /** 作者信息 */
  author?: Author
  /** 外部链接图标开关 */
  noIcon?: boolean
}

/** Footer_Group */
export interface Group {
  /** 图标配置 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 外部链接图标开关 */
  noIcon?: boolean
  /** 分组标题 */
  title: string
  /** 链接数组 */
  links: Link[]
}

/** Footer_Beian */
export interface Beian {
  /** ICP 备案 */
  icp?: Icp
  /** 公安备案 */
  police?: Police
  /** 是否显示图标 */
  showIcon?: boolean
}

/** Footer_Beian_Icp */
export interface Icp {
  /** ICP 备案号 */
  number?: string
  /** ICP 图标 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** ICP网站或自定义链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
}

/** Footer_Beian_Police */
export interface Police {
  /** 公安备案号 */
  number?: string
  /** 公安备案图标 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 公安备案网站或自定义链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
}

/** Footer_Author */
export interface Author {
  /** 版权图标配置 @default 'ri:copyright-line' */
  icon?: IconType
  /** 版权图片配置 */
  image?: ImageType
  /** 版权起始年份 */
  startYear?: number
  /** 作者姓名 */
  name?: string
  /** 作者链接 */
  link?: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
  /** 版权文本 */
  text?: string
}

/** Footer_Link */
export interface Link {
  /** 链接图标 */
  icon?: IconType
  /** 图片配置 */
  image?: ImageType
  /** 外部链接图标开关 */
  noIcon?: boolean
  /** 链接名称 */
  name: string
  /** 链接地址 */
  link: LinkType
  /** Rel 属性 */
  rel?: RelType
  /** 链接的目标 */
  target?: TargetType
}
