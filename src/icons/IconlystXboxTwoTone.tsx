import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXboxTwoTone = ({
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
      d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.053 17.719c1.926-2.627 4.28-5.08 6.947-6.86 2.666 1.78 5.02 4.233 6.947 6.86M5.781 5.5c1.333.642 2.471 1.732 3.522 3.006-1.625 1.256-4.349 4.544-5.176 7.852M18.216 5.5c-1.334.642-2.472 1.732-3.523 3.006 1.625 1.256 4.35 4.544 5.177 7.852M7.184 4.398c1.868.088 3.434.808 4.816 2.044 1.381-1.236 2.948-1.956 4.816-2.044"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystXboxTwoTone;
