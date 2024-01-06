export interface HealthcareProvider {
    id: string;
    name: string;
    city: string;
    street: string;
    postalCode: string;
    phone: string;
}

export interface healthcareProviderData {
    healthcareProviders: HealthcareProvider[];
  }