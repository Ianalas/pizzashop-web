import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "custom-user-id",
      name: "Fulano",
      email: "test@example.com",
      phone: "344234324",
      role: "manager",
      createdAt: new Date(),
      updatedAt: null,
    });
  }
);
