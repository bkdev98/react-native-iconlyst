import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize6Broken = ({
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
      d="m15 8.95.008-3.677M18.679 9.25h-1.036M14.998 8.95l4.003-4M14.998 15.398l3.677.008M14.697 19.075v-1.036M14.998 15.395 19 19.397M8.853 9.098 5.177 9.09M9.154 5.422v1.036M8.853 9.1 4.852 5.098M8.853 15.547l-.008 3.677M5.174 15.246H6.21M8.854 15.547l-4.002 4.002"
    />
  </Svg>
);
export default IconlystResize6Broken;
