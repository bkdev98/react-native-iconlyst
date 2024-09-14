import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCloseBold = ({
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
      d="M18.885 11.317c0 .42-.33.75-.75.75a.749.749 0 1 1 .75-.75m-2.62.06c0 .98.79 1.78 1.78 1.78h4a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4c-.99 0-1.78.8-1.78 1.79"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.765 11.378a3.29 3.29 0 0 1 3.28-3.29h3.998a.29.29 0 0 0 .292-.302c-.176-2.84-2.541-5.098-5.42-5.098h-8.13c-3 0-5.44 2.44-5.44 5.44v4.617c0 .174.148.311.322.308 3.35-.058 6.218 2.72 6.218 6.115q0 .398-.052.782a.313.313 0 0 0 .304.358h6.778c3.023 0 5.277-2.446 5.423-5.35a.29.29 0 0 0-.293-.3h-4c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.782 16.189a.75.75 0 0 0-1.061 0l-1.392 1.393-1.392-1.392a.75.75 0 1 0-1.061 1.061l1.392 1.391-1.393 1.394a.749.749 0 1 0 1.06 1.06l1.394-1.393 1.392 1.392a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-1.393-1.393 1.393-1.392a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletCloseBold;
