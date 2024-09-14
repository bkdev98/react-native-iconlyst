import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindRightDirectionLight = ({
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
      d="M20.56 6.67a3.38 3.38 0 0 0-3.489 0 3.38 3.38 0 0 1-3.489 0 3.38 3.38 0 0 0-3.49 0 3.38 3.38 0 0 1-3.488 0 3.38 3.38 0 0 0-3.49 0M3.114 12.485a3.38 3.38 0 0 1 3.49 0 3.38 3.38 0 0 0 3.489 0 3.38 3.38 0 0 1 3.489 0M20.56 18.3a3.38 3.38 0 0 0-3.489 0 3.38 3.38 0 0 1-3.489 0 3.38 3.38 0 0 0-3.49 0 3.38 3.38 0 0 1-3.488 0 3.38 3.38 0 0 0-3.49 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.75 8.361 2.364-2.166-2.387-2.187M18.75 19.992l2.364-2.166-2.387-2.187M11.772 14.177l2.365-2.166-2.388-2.188"
    />
  </Svg>
);
export default IconlystWindRightDirectionLight;
