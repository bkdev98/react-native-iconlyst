import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPersimmonTwoTone = ({
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
      d="M11.952 6.187c.166-.904-.009-2.806-2.038-3.187"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.378 8.676c-1.307 1.305-2.096 3.002-2.096 4.857C3.282 17.657 7.185 21 12 21s8.718-3.343 8.718-7.467c0-1.855-.79-3.552-2.096-4.857"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.849 8.556c2.855 1.736 4.634.343 5.167-.57-2.549-2.58-4.103-2.737-7.016-1.57-3.398-1.714-6.093.332-7.016 1.57.533.913 2.312 2.306 5.167.57.01.543.433 1.719 1.849 2.084 1.416-.366 1.84-1.541 1.849-2.084"
    />
  </Svg>
);
export default IconlystPersimmonTwoTone;
