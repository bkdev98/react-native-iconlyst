import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMasterCard1TwoTone = ({
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
      d="M17.315 4.125H6.685c-2.573 0-4.185 1.82-4.185 4.398v6.954c0 2.578 1.604 4.397 4.184 4.397h10.63c2.58 0 4.186-1.82 4.186-4.397V8.523c0-2.577-1.605-4.398-4.185-4.398"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Circle
      cx={14.001}
      cy={12}
      r={3}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.765a3 3 0 1 0 0 4.47"
    />
  </Svg>
);
export default IconlystMasterCard1TwoTone;
