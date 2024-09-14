import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCloseBulk = ({
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
      d="M15.265 11.378a3.29 3.29 0 0 1 3.28-3.29h3.998a.29.29 0 0 0 .292-.302c-.176-2.84-2.541-5.098-5.42-5.098h-8.13c-3 0-5.44 2.44-5.44 5.44v4.617c0 .174.148.311.322.308 3.35-.058 6.218 2.72 6.218 6.115q-.001.398-.053.782a.313.313 0 0 0 .305.358h6.778c3.023 0 5.277-2.446 5.422-5.35a.29.29 0 0 0-.292-.3h-4c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.385 11.316c0 .42-.33.75-.75.75a.749.749 0 1 1 .75-.75m-2.62.06c0 .98.79 1.78 1.78 1.78h4a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4c-.99 0-1.78.8-1.78 1.79M7.282 16.188a.75.75 0 0 0-1.061 0L4.829 17.58l-1.392-1.392a.75.75 0 1 0-1.061 1.06l1.392 1.392-1.393 1.394a.749.749 0 1 0 1.06 1.06l1.394-1.393 1.392 1.391a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06L5.89 18.64l1.393-1.392a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletCloseBulk;
