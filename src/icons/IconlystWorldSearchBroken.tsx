import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldSearchBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.556 20.99a9.01 9.01 0 0 1-8.273-8.986 8.99 8.99 0 0 1 3.21-6.892M12.287 3c4.6 0 8.385 3.449 8.93 7.899"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.622 11.085a20 20 0 0 0-.197-2.21C14.956 5.445 13.73 3 12.286 3c-1.433 0-2.67 2.445-3.138 5.875a22 22 0 0 0-.216 3.129c0 1.106.075 2.164.216 3.138.328 2.38 1.34 4.676 2.407 5.847M6.326 12.013h5.555"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.509 19.311a3.118 3.118 0 1 1-4.41-4.41 3.118 3.118 0 0 1 4.41 4.41"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.198 21-1.69-1.69"
    />
  </Svg>
);
export default IconlystWorldSearchBroken;
