import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorLight = ({
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
      d="M8.491 4.537h7.022c2.443 0 3.956 1.326 3.95 3.763v7.395c0 2.436-1.514 3.77-3.958 3.77H8.491c-2.435 0-3.956-1.357-3.956-3.832V8.3c0-2.437 1.52-3.763 3.956-3.763M16.049 4.537V3m-4.05 1.537V3m-4.05 1.537V3M7.95 19.463V21m4.049-1.537V21m4.05-1.537V21M4.537 7.95H3m1.537 4.049H3m1.537 4.05H3M19.463 16.049H21m-1.537-4.05H21m-1.537-4.05H21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.674 8.445H10.33c-1.16 0-1.886.632-1.886 1.793v3.495c0 1.179.725 1.825 1.886 1.825h3.341c1.165 0 1.886-.636 1.886-1.796v-3.524c.004-1.161-.718-1.793-1.882-1.793"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCpuProcessorLight;
