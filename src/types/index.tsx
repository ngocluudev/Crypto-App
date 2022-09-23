
interface coinHistoryType {
    price: string,
    timestamp: number
}

export interface ResultType {
    propA: string;
    propB: string;
} 
export interface SimplifiedPropsType {
    simplified?: boolean,
}

export interface StatsType {
    title: string,
    value: number | string 
    icon: JSX.Element
}
export interface LineChartPropsType {
    coinHistory: {
        status: string | number,
        data: {
            change: number,
            history: coinHistoryType[]
        }
    },
    currentPrice: number | string,
    coinName: string,
}