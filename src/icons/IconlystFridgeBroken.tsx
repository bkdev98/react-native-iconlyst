import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFridgeBroken = ({
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
      d="M15.199 21c1.695 0 2.748-1.196 2.748-2.888V5.888C17.947 4.196 16.894 3 15.2 3H8.8C7.11 3 6.052 4.196 6.052 5.888v12.224C6.053 19.804 7.106 21 8.799 21H12M15.041 7.474h-1.76M15.041 12.498h-1.76M8.749 9.987h9.2"
    />
  </Svg>
);
export default IconlystFridgeBroken;
