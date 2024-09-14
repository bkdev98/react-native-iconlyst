import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDigitalSecurityTwoTone = ({
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
      d="M5.481 11.721a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0m0 0H7.5M17.501 11.72h2.018m0 0a1.241 1.241 0 1 0 2.482 0 1.241 1.241 0 0 0-2.482 0M12.463 15.844v2.017m-.001 2.484a1.24 1.24 0 1 1 0-2.482 1.24 1.24 0 0 1 0 2.482"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.504 8.038V6.623a3.004 3.004 0 0 0-6.008-.014v1.43M10.68 15.841h3.64c1.077 0 1.616 0 2.032-.2.415-.199.75-.534.949-.948.2-.416.2-.955.2-2.032v-1.44c0-1.077 0-1.615-.2-2.03-.2-.416-.534-.75-.95-.95s-.954-.2-2.03-.2h-3.642c-1.077 0-1.615 0-2.031.2-.415.2-.75.534-.95.95s-.199.953-.199 2.03v1.44c0 1.077 0 1.616.2 2.032.199.414.534.75.949.949.416.2.954.2 2.031.2"
    />
  </Svg>
);
export default IconlystDigitalSecurityTwoTone;
