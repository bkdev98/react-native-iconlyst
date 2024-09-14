import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTaxiCarLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.75 15.724h.5M6.25 15.724h.5M9.75 15.724h5M3.254 11.833a64 64 0 0 0 17.973 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.257 20.432a1 1 0 0 0 1 1.003h1.981a1 1 0 0 0 1-1v-.41a1 1 0 0 1 1-1h8.013a1 1 0 0 1 1 1v.41a1 1 0 0 0 1 1h1.995a1 1 0 0 0 1-1v-5.227c0-.81-.26-1.6-.738-2.254l-1.166-1.565a1.8 1.8 0 0 1-.223-.427l-1.05-2.606a2.24 2.24 0 0 0-1.729-1.448 26.2 26.2 0 0 0-8.17 0 2.24 2.24 0 0 0-1.72 1.448L5.4 10.962a1.7 1.7 0 0 1-.223.408l-1.185 1.632a3.78 3.78 0 0 0-.719 2.225z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="m8.75 6.834.749-1.871a1 1 0 0 1 .928-.629h3.646a1 1 0 0 1 .928.629l.749 1.871"
    />
  </Svg>
);
export default IconlystTaxiCarLight;
