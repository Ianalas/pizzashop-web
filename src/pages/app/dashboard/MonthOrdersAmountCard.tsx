import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./MetricCardSkeleton";

export function MonthOrdersAmountCards(){
  const {data: monthOrdersAmount} = useQuery({
    queryFn: getMonthOrdersAmount,
    queryKey: ["metrics","month-orders-amount"],
  })

  return(
    <Card>
      <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
      {monthOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <span  className="text-xs text-muted-foreground">
              {monthOrdersAmount.diffFromLastMonth >= 0 ? (
                <p  className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">+{monthOrdersAmount.diffFromLastMonth}%</span>{" "}em relação ao mês anterior
                </p>
              ):(
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">{monthOrdersAmount.diffFromLastMonth}%</span>{" "}em relação ao mês anterior
                </p>
              )}
            </span>
          </>
        ): (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}