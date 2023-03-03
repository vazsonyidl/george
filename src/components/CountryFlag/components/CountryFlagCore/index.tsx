import classNames from 'classnames';
import React from 'react';
import { StyleableComponent } from 'types';

import styles from './CountryFlagCore.module.scss';
import { CountryFlagCoreSize } from '../../types';

interface CountryFlagCoreProps extends StyleableComponent {
  countryCode: string;
  size?: CountryFlagCoreSize;
}

const CountryFlagCore: React.FC<CountryFlagCoreProps> = ({
  countryCode,
  className,
  size = CountryFlagCoreSize.DEFAULT,
}) => {
  const localClassNames = classNames(className, {
    [styles[`size-${size}`]]: true,
  });

  return (
    <div>
      <img
        src={`./assets/flags/${countryCode}.png`}
        alt={`${countryCode} flag`}
        className={localClassNames}
      />
    </div>
  );
};

export default CountryFlagCore;
