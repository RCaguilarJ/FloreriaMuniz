'use client';

import React from 'react';
import {
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  GlobeAmericasIcon,
  LockClosedIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ScissorsIcon,
  SparklesIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';
import {
  BuildingStorefrontIcon as BuildingStorefrontIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  ClockIcon as ClockIconSolid,
  DevicePhoneMobileIcon as DevicePhoneMobileIconSolid,
  GlobeAmericasIcon as GlobeAmericasIconSolid,
  LockClosedIcon as LockClosedIconSolid,
  MapPinIcon as MapPinIconSolid,
  ScissorsIcon as ScissorsIconSolid,
  SparklesIcon as SparklesIconSolid,
  TruckIcon as TruckIconSolid,
} from '@heroicons/react/24/solid';

type IconVariant = 'outline' | 'solid';
type HeroIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const outlineIcons: Record<string, HeroIconComponent> = {
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  GlobeAmericasIcon,
  LockClosedIcon,
  MapPinIcon,
  ScissorsIcon,
  SnowflakeIcon: SparklesIcon,
  SparklesIcon,
  TruckIcon,
};

const solidIcons: Record<string, HeroIconComponent> = {
  BuildingStorefrontIcon: BuildingStorefrontIconSolid,
  CalendarDaysIcon: CalendarDaysIconSolid,
  ChatBubbleLeftRightIcon: ChatBubbleLeftRightIconSolid,
  ClockIcon: ClockIconSolid,
  DevicePhoneMobileIcon: DevicePhoneMobileIconSolid,
  GlobeAmericasIcon: GlobeAmericasIconSolid,
  LockClosedIcon: LockClosedIconSolid,
  MapPinIcon: MapPinIconSolid,
  ScissorsIcon: ScissorsIconSolid,
  SparklesIcon: SparklesIconSolid,
  TruckIcon: TruckIconSolid,
};

function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  ...props
}: IconProps) {
  const iconSet = variant === 'solid' ? solidIcons : outlineIcons;
  const IconComponent = iconSet[name] ?? QuestionMarkCircleIcon;

  return (
    <IconComponent
      width={size}
      height={size}
      className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`.trim()}
      onClick={disabled ? undefined : onClick}
      {...props}
    />
  );
}

export default Icon;
