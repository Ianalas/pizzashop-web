import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./MetricCardSkeleton";

export function MonthCanceledOrdersAmountCard(){
  const {data: monthCanceledOrdersAmount} = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ["metrics","month-canceled-orders-amount"],
  })

  return(
    <Card>
      <CardHeader className="flex flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
      {monthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <span  className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <p  className="text-xs text-muted-foreground">
                  <span className="text-emerald-500 dark:text-emerald-400">{monthCanceledOrdersAmount.diffFromLastMonth}%</span>{" "}em relação ao mês anterior
                </p>
              ):(
                <p className="text-xs text-muted-foreground">
                  <span className="text-rose-500 dark:text-rose-400">+{monthCanceledOrdersAmount.diffFromLastMonth}%</span>{" "}em relação ao mês anterior
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