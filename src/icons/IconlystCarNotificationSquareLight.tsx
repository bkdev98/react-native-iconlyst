import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarNotificationSquareLight = ({
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
      d="M14.467 3H8.032C5.092 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.084 21 8.032 21h8.434c2.949 0 4.784-2.081 4.784-5.026v-5.948"
    />
    <Circle
      cx={19.297}
      cy={5}
      r={2}
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
      d="M14.46 12.908h.553M9.489 12.908h.553M7.215 10.565c3.337.473 6.723.473 10.06 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.217 15.68a.56.56 0 0 0 .56.561h1.348c.31 0 .56-.25.56-.56v-.228c0-.31.25-.56.56-.56h4.008c.309 0 .56.25.56.56v.229c0 .309.25.56.559.56h1.354c.309 0 .56-.251.56-.56v-2.926c-.001-.453-.146-.896-.414-1.261l-.652-.876a1 1 0 0 1-.125-.239l-.588-1.631c-.147-.42-.529-.74-.968-.81a14.7 14.7 0 0 0-4.572 0 1.25 1.25 0 0 0-.963.81l-.587 1.631a1 1 0 0 1-.125.228l-.663.914a2.1 2.1 0 0 0-.403 1.245z"
    />
  </Svg>
);
export default IconlystCarNotificationSquareLight;
