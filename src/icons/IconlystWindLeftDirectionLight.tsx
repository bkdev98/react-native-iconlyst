import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindLeftDirectionLight = ({
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
      d="M3.668 6.67a3.38 3.38 0 0 1 3.49 0 3.38 3.38 0 0 0 3.488 0 3.38 3.38 0 0 1 3.49 0 3.38 3.38 0 0 0 3.489 0 3.38 3.38 0 0 1 3.49 0M21.114 12.485a3.38 3.38 0 0 0-3.49 0 3.38 3.38 0 0 1-3.488 0 3.38 3.38 0 0 0-3.49 0M3.668 18.3a3.38 3.38 0 0 1 3.49 0 3.38 3.38 0 0 0 3.488 0 3.38 3.38 0 0 1 3.49 0 3.38 3.38 0 0 0 3.489 0 3.38 3.38 0 0 1 3.49 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.48 8.361 3.113 6.195l2.388-2.187M5.48 19.992l-2.366-2.166 2.388-2.187M12.458 14.177l-2.365-2.166 2.387-2.188"
    />
  </Svg>
);
export default IconlystWindLeftDirectionLight;
