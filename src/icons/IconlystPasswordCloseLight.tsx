import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordCloseLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.585 10.573V8.386c0-2.877-1.793-4.911-4.673-4.911h-8.24C4.8 3.475 3 5.509 3 8.385v3.963c0 2.877 1.791 4.91 4.672 4.91h2.027M13.342 17.262A3.83 3.83 0 1 0 21 17.26a3.83 3.83 0 0 0-7.66 0M18.25 18.338l-2.16-2.16m2.16 0-2.16 2.16z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.793 10.319v-.064zm-.26-.013a.261.261 0 0 1 .522 0 .26.26 0 0 1-.26.26.26.26 0 0 1-.262-.26M15.697 10.319v-.064zm-.26-.013a.26.26 0 1 1 .521-.001.26.26 0 0 1-.52 0M7.886 10.319v-.064zm-.26-.013a.261.261 0 0 1 .523 0 .26.26 0 0 1-.261.26.26.26 0 0 1-.261-.26"
    />
  </Svg>
);
export default IconlystPasswordCloseLight;
