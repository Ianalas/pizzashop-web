import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./MonthRevenueCard";
import { MonthOrdersAmountCards } from "./MonthOrdersAmountCard";
import { DayOrdersAmountCard } from "./DayOrdersAmountCard";
import { MonthCanceledOrdersAmountCard } from "./MonthCanceledOrdersAmountCard";
import { RevenueChart } from "./RevenueChart";
import { PopularProductsChart } from "./PopularProductsChart";

export function Dashboard(){
  return(
   <>
    <Helmet title="dahsboard" />
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCards />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
   </>
  )
}