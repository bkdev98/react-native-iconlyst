import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.55 13.928h1.791M6.658 13.928h1.8M3 19.289v-5.614c.001-.8.253-1.579.72-2.228l1.187-1.625a2 2 0 0 0 .224-.419l1.05-2.919c.261-.75.94-1.325 1.723-1.46a26.8 26.8 0 0 1 8.182 0c.785.137 1.465.71 1.732 1.46l1.051 2.92c.051.15.127.292.224.418l1.168 1.576c.48.655.738 1.445.739 2.257M21 16.472v2.817"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 9.734c5.97.837 12.03.837 18 0M6.998 19.289v-1.051c0-.2.081-.396.222-.537a.77.77 0 0 1 .537-.223h2.12M17 19.289v-1.051c0-.2-.082-.396-.223-.537a.77.77 0 0 0-.536-.223h-3.852"
    />
  </Svg>
);
export default IconlystCarBroken;
