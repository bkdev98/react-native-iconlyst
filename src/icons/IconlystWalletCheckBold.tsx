import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCheckBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.825 11.567c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75a.749.749 0 1 1 1.5 0m-2.63.06c0 .98.8 1.78 1.79 1.78h4a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4c-.99 0-1.79.8-1.79 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.695 11.628c0-1.81 1.48-3.29 3.29-3.29h3.998a.29.29 0 0 0 .291-.302c-.175-2.84-2.54-5.098-5.42-5.098h-8.13c-3 0-5.44 2.44-5.44 5.44v6.74q0 .225.02.45c.01.111.086.202.187.247.268.12.52.289.744.513l.237.237a.3.3 0 0 0 .425 0l2.588-2.598c.98-.98 2.56-.98 3.54 0 .98.97.98 2.55 0 3.53l-2.571 2.58c-.176.176-.072.474.176.48h8.225c3.02 0 5.276-2.448 5.422-5.35a.29.29 0 0 0-.292-.3h-4a3.29 3.29 0 0 1-3.29-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.788 15.2a.75.75 0 0 0-1.061 0l-4.043 4.05-1.688-1.69a.75.75 0 1 0-1.061 1.062l2.219 2.22a.754.754 0 0 0 1.06 0l4.575-4.58a.75.75 0 0 0-.001-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletCheckBold;
