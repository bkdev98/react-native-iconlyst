import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.667 14.398a2.333 2.333 0 0 0-2.334-2.334h-2.666c-.451 0-.872-.128-1.23-.35M9 16.729h4.333c.404 0 .784-.103 1.116-.284M8.333 9.732a2.333 2.333 0 0 1 2.334-2.334H15M12.002 19.063v-14"
    />
  </Svg>
);
export default IconlystDollarBroken;
