import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCpuProcessorTwoTone = ({
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
      d="M8.991 4.537h7.022c2.443 0 3.956 1.326 3.95 3.763v7.395c0 2.436-1.514 3.77-3.957 3.77H8.99c-2.435 0-3.956-1.357-3.956-3.832V8.3c0-2.437 1.52-3.763 3.956-3.763"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.549 4.537V3m-4.05 1.537V3m-4.05 1.537V3M8.45 19.463V21m4.049-1.537V21m4.05-1.537V21M5.037 7.95H3.5m1.537 4.049H3.5m1.537 4.05H3.5M19.963 16.049H21.5m-1.537-4.05H21.5m-1.537-4.05H21.5"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.174 8.445H10.83c-1.16 0-1.886.632-1.886 1.793v3.495c0 1.179.725 1.825 1.886 1.825h3.341c1.165 0 1.886-.636 1.886-1.796v-3.524c.004-1.161-.718-1.793-1.882-1.793"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCpuProcessorTwoTone;
