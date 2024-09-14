import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOffBroken = ({
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
      d="M11.68 14.547v-5.04h2.483M11.68 12.031h2.148M16.309 14.547v-5.04h2.483M16.309 12.031h2.148"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.002 3.727H6.46C3.719 3.727 2 5.668 2 8.415v7.12c0 2.747 1.71 4.689 4.461 4.689h11.08c2.752 0 4.463-1.942 4.463-4.69V8.416c0-2.747-1.711-4.688-4.461-4.688h-1.77"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.453 11.999c0 1.315-.95 2.381-2.122 2.381S5.209 13.314 5.209 12s.95-2.382 2.122-2.382S9.453 10.683 9.453 12"
    />
  </Svg>
);
export default IconlystOffBroken;
