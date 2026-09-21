export interface NotificationSettings {
  orderUpdates: boolean;
  deliveryUpdates: boolean;
  promotionalOffers: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
}

export const defaultNotificationSettings: NotificationSettings = {
  orderUpdates: true,
  deliveryUpdates: true,
  promotionalOffers: false,
  emailNotifications: true,
  pushNotifications: false,
};
