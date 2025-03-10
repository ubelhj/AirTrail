import type { flight, app_config, seat, user } from '$lib/db/schema';

export type OAuthConfig = Omit<
  app_config,
  'id' | 'enabled' | 'autoRegister' | 'autoLogin' | 'scope'
> & {
  id: number;
  enabled: boolean;
  autoRegister: boolean;
  autoLogin: boolean;
  scope: string;
};
export type AppConfig = OAuthConfig;
export type ClientAppConfig = Omit<OAuthConfig, 'clientSecret'>;

export type ServerUser = user;
export type User = Omit<ServerUser, 'password'>;
export type Seat = Omit<seat, 'id'> & {
  id: number;
};
export type Flight = Omit<flight, 'id'> & {
  id: number;
  seats: Seat[];
};
export type CreateFlight = Omit<Flight, 'id' | 'seats'> & {
  seats: Omit<Seat, 'flightId' | 'id'>[];
};

export const SeatTypes = ['window', 'aisle', 'middle', 'other'] as const;
export const SeatClasses = [
  'economy',
  'economy+',
  'business',
  'first',
  'private',
] as const;
export const FlightReasons = ['leisure', 'business', 'crew', 'other'] as const;

export const VisitedCountryStatus = [
  'lived',
  'visited',
  'layover',
  'wishlist',
] as const;
