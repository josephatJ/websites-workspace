export interface Manifest {
  version: string;
  name: string;
  description: string;
  appType: string;
  launch_path: string;
  developer: {
    name: string;
    email: string;
  };
  default_locale: string;
  href: string;
}
