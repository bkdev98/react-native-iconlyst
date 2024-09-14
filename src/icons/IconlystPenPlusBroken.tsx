import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenPlusBroken = ({
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
      d="m17.314 12.103-.997 6.023a.83.83 0 0 1-.828.694c-1.478-.045-4.959-.033-7.573.689a.81.81 0 0 1-.795-.212.81.81 0 0 1-.218-.801c.727-2.609.732-6.096.693-7.568a.82.82 0 0 1 .69-.834l6.022-.996M6.685 6.304H3m1.842-1.841v3.686"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.417 5.783a1.268 1.268 0 0 0-2.006.283l-.578 1.044a1.484 1.484 0 0 0 .25 1.766l3.455 3.453a1.48 1.48 0 0 0 1.764.25L20.347 12a1.268 1.268 0 0 0 .284-2.005L18.523 7.89M11.204 15.21 7.115 19.3M13.041 13.372a1.3 1.3 0 1 0 0 1.84"
    />
  </Svg>
);
export default IconlystPenPlusBroken;
