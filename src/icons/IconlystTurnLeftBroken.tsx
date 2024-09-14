import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnLeftBroken = ({
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
      d="m7.058 12.809-3.054 3.053M5.933 17.922c.32.32.729.596 1.126.993M4.004 15.86H14.86a5.14 5.14 0 0 0 5.133-4.829M6.422 5.578h8.437a5.14 5.14 0 0 1 4.396 2.472"
    />
  </Svg>
);
export default IconlystTurnLeftBroken;
