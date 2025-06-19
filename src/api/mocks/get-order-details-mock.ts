import { http, HttpResponse } from "msw";
import { GetOrderDetailsParams, GetOrderDetailsResponse } from "../get-order-details";

export const getOrderDetailsMock = http.get<GetOrderDetailsParams, never, GetOrderDetailsResponse>(
  "/orders/:orderId",
  ({params}) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'Fulano',
        email: 'test@example.com',
        phone: '4567893212'
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 1000,
          product: { name: 'refri' },
          quantity: 2,
        },
        {
          id: 'order-item-2',
          priceInCents: 3200,
          product: { name: 'pizza' },
          quantity: 1,
        },
      ],
      totalInCents: 4200,
    });
  }
);
