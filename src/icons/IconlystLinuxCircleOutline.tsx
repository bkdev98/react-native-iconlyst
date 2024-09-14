import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinuxCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.65 10.645a.75.75 0 0 1 .75.75v1.69a.75.75 0 1 1-1.5 0v-1.69a.75.75 0 0 1 .75-.75M13.35 10.645a.75.75 0 0 1 .75.75v1.69a.75.75 0 1 1-1.5 0v-1.69a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.3 11.845a5.7 5.7 0 0 1 11.4 0v3.15a.75.75 0 0 1-1.5 0v-3.15a4.2 4.2 0 0 0-8.4 0v3.15a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.311 12.154c.43-.216.948-.216 1.377 0l1.618.814c.422.212.708.606.757 1.064a1.32 1.32 0 0 1-.54 1.2l-1.618 1.207a1.53 1.53 0 0 1-1.81 0l-1.618-1.206a1.32 1.32 0 0 1-.54-1.201c.049-.458.335-.852.757-1.064zm.674 1.34-1.391.7 1.393 1.039.013.001.013-.001 1.393-1.039-1.392-.7h-.003a.1.1 0 0 0-.023 0zm.03 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinuxCircleOutline;
