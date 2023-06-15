const mapping: Record<string, string> = {
  appointments: 'appointment',
  availabilities: 'availability',
  schools: 'school',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
