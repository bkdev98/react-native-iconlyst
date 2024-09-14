import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColdDrinkLight = ({
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
      d="M12 15.527c-3.838 0-6.755-3.45-6.119-7.233l.68-4.57A.85.85 0 0 1 7.4 3h9.198c.421 0 .778.308.84.724l.68 4.57c.635 3.784-2.283 7.233-6.12 7.233m0 0V21m-2.19 0h4.38"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.004 9.902 1.285-.786a5.05 5.05 0 0 1 4.968-.163 5.04 5.04 0 0 0 5.067-.226l.674-.433"
    />
  </Svg>
);
export default IconlystColdDrinkLight;
