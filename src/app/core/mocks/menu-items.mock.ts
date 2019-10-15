import { Menu } from '@appShared/models/menu.model';

export const menuItems: Menu[] = [
    {
      description: 'Redial',
      icon: 'dialpad',
      isEnabled: true
    },
    {
      description: 'Check voice mail',
      icon: 'voicemail',
      isEnabled: false
    },
    {
      description: 'Disable alerts',
      icon: 'notifications_off',
      isEnabled: true
    }
  ];
