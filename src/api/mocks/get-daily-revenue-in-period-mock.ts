import { http, HttpResponse } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    {date: "2022-01-01", receipt: "5000"},
    {date: "2022-01-02", receipt: "2000"},
    {date: "2022-01-03", receipt: "7000"},
    {date: "2022-01-04", receipt: "4000"},
    {date: "2022-01-05", receipt: "9000"},
    {date: "2022-01-06", receipt: "300"},
    {date: "2022-01-07", receipt: "500"},
  ]);
});
