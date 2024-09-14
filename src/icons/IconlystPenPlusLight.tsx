import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenPlusLight = ({
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
      d="m13.833 7.11.578-1.044a1.268 1.268 0 0 1 2.006-.283l4.213 4.213a1.268 1.268 0 0 1-.284 2.005l-1.044.577a1.48 1.48 0 0 1-1.764-.249l-3.456-3.453a1.484 1.484 0 0 1-.249-1.766M11.204 15.21 7.115 19.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.041 15.211a1.3 1.3 0 1 0-1.838-1.839 1.3 1.3 0 0 0 1.838 1.84"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPenPlusLight;
