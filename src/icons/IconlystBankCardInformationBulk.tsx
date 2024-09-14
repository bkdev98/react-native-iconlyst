import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardInformationBulk = ({
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
      d="M3.301 9.871a.3.3 0 0 0-.3.3v5.12c0 2.793 1.794 4.67 4.463 4.67h10.07c2.671 0 4.465-1.877 4.465-4.67v-5.12a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.819 14.7a1.74 1.74 0 0 1-1.739 1.74h-1.276a1.74 1.74 0 0 1-1.738-1.74v-1.25c0-.96.78-1.74 1.738-1.74h1.276c.959 0 1.739.78 1.739 1.74zm-3.014-1.49h1.275c.134 0 .239.106.239.24v1.25a.236.236 0 0 1-.24.24h-1.274a.236.236 0 0 1-.24-.24v-1.25c0-.134.106-.24.24-.24"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M10.341 16.19H6.928a.75.75 0 0 1 0-1.5h3.413a.75.75 0 1 1 0 1.5M6.928 11.96h2.535a.75.75 0 0 1 0 1.5H6.928a.75.75 0 0 1 0-1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.654 8.37c.172 0 .31-.146.291-.317-.262-2.423-1.958-4.014-4.41-4.014H7.464c-2.451 0-4.147 1.591-4.41 4.014a.29.29 0 0 0 .292.316z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardInformationBulk;
