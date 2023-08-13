const mapping: Record<string, string> = {
  events: 'event',
  organizations: 'organization',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
