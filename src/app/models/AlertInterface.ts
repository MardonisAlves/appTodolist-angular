import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface AlertInterface{
    type: string;
    message: string;
    id:number;
    icon:IconProp;
  }