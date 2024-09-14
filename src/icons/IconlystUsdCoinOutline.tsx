import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsdCoinOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 12c0-5.385 4.366-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.37 7.015a.75.75 0 0 1 0 1.06c-2.137 2.138-2.137 5.713 0 7.85a.75.75 0 1 1-1.06 1.06c-2.723-2.723-2.723-7.247 0-9.97a.75.75 0 0 1 1.06 0M16.13 7.013a.75.75 0 0 1 1.06 0c2.724 2.723 2.724 7.247 0 9.97a.75.75 0 0 1-1.06-1.06c2.137-2.137 2.137-5.712 0-7.85a.75.75 0 0 1 0-1.06M9.463 10.362a2.393 2.393 0 0 1 2.393-2.393h1.962a.75.75 0 0 1 0 1.5h-1.962a.893.893 0 1 0 0 1.785h.788a2.393 2.393 0 1 1 0 4.786h-1.962a.75.75 0 0 1 0-1.5h1.962a.893.893 0 1 0 0-1.786h-.788a2.393 2.393 0 0 1-2.393-2.392"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 6.795a.75.75 0 0 1 .75.75v1.178a.75.75 0 0 1-1.5 0V7.545a.75.75 0 0 1 .75-.75m0 7.744a.75.75 0 0 1 .75.75v1.166a.75.75 0 0 1-1.5 0v-1.166a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUsdCoinOutline;
