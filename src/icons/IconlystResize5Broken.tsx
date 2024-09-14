import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize5Broken = ({
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
      d="m19 5.25-.009 3.677M15.32 4.95h1.036M19 5.25l-4.002 4.002M18.7 19.395l-3.677-.008M19 15.719v1.036M18.7 19.397l-4.002-4.002M5.152 5.102l3.677.008M4.852 8.778V7.742M5.152 5.098 9.154 9.1M4.854 19.247l.008-3.677M8.532 19.547H7.496M4.852 19.248l4.002-4.002"
    />
  </Svg>
);
export default IconlystResize5Broken;
