import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBadgeLight = ({
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
      d="m12.546 4.143 1.305-.638a1.244 1.244 0 0 1 1.644.534l.68 1.283c.18.34.507.576.884.643l1.43.25c.661.116 1.11.735 1.017 1.399l-.203 1.439c-.055.38.07.763.337 1.038l1.01 1.044a1.244 1.244 0 0 1 0 1.729l-1.01 1.044a1.24 1.24 0 0 0-.337 1.038l.203 1.438a1.244 1.244 0 0 1-1.016 1.399l-1.43.251a1.24 1.24 0 0 0-.884.641l-.681 1.284a1.243 1.243 0 0 1-1.644.534l-1.305-.638a1.24 1.24 0 0 0-1.092 0l-1.306.638a1.24 1.24 0 0 1-1.643-.534l-.68-1.284a1.24 1.24 0 0 0-.884-.641l-1.432-.251a1.244 1.244 0 0 1-1.015-1.4l.203-1.437a1.24 1.24 0 0 0-.338-1.038l-1.01-1.044a1.244 1.244 0 0 1 0-1.73l1.01-1.043c.267-.275.392-.659.338-1.038l-.203-1.44a1.244 1.244 0 0 1 1.015-1.397l1.432-.251c.377-.067.703-.304.883-.643l.681-1.283a1.244 1.244 0 0 1 1.643-.534l1.306.638c.345.169.747.169 1.092 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.605 14.452 4.898-4.897M14.383 14.373v.048m.195-.037a.196.196 0 1 1-.393 0 .196.196 0 0 1 .393 0M9.62 9.608v.048m.194-.038a.196.196 0 1 1-.392 0 .196.196 0 0 1 .392 0"
    />
  </Svg>
);
export default IconlystDiscountBadgeLight;
