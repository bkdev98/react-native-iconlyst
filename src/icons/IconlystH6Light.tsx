import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH6Light = ({
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
      d="M3.5 6.574V19.28m8.47-12.706V19.28M3.5 12.927h8.47M20.491 10.808h-.772a3.286 3.286 0 0 0-3.286 3.286v2.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 16.744a2.533 2.533 0 1 1-5.067 0 2.533 2.533 0 0 1 5.067 0M10.93 19.28h2.081M10.93 6.574h2.081M2.46 19.28h2.082M2.459 6.574h2.082"
    />
  </Svg>
);
export default IconlystH6Light;
