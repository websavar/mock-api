export interface UserInterface {
  userId: string
  firstName: string
  lastName: string
  email: string
}

export interface ProjectsInterface {
  name: string
  projectId: string
}

export interface GatewaysInterface {
  gatewayId: string
  name: string
}

export interface FilterValuesInterface {
  project: string
  gateway: string
  fromDate: string
  toDate: string
}

export interface FilterObjectInterface {
  projectId: string | undefined
  gatewayId: string | undefined
  from: string
  to: string
};

export interface GeneratedReportsInterface {
  name: string
  data: {
    date: string
    gateway: string
    transactionId: string
    amount: number
  }[]
}

export interface ReportsHeaderInterface {
  filterValues: FilterValuesInterface
  changeFilterHandle: (key: string) => (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => any
  generateReportHandle: () => Promise<void>
  projects: ProjectsInterface[]
  gateways: GatewaysInterface[]
  loading: boolean
}

export interface ReportsInterface {
  generatedReport: GeneratedReportsInterface[]
  filterValues: FilterValuesInterface
  loading: boolean
}

export interface ReportDataInterface {
  paymentId: string
  amount: number
  projectId: string
  gatewayId: string
  modified: string
  created: string
}

export interface dropdownListInterface {
  value: string
  defaultValue?: string
  list: string[]
  onChangeValue: any,
  name: string
}

export interface IHeader {
  name: string
  align?: "inherit" | "left" | "right" | "center" | "justify"
}

export interface ChartDataInterface {
  name: string
  value: number
}
