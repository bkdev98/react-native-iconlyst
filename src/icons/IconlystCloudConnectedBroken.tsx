import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectedBroken = ({
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
      d="M14.28 20.745a1.82 1.82 0 1 1 0-3.64h4.9a1.82 1.82 0 1 1 0 3.64h-1.73M19.18 13.465a1.82 1.82 0 0 1 0 3.64h-4.9a1.82 1.82 0 1 1 0-3.64h1.914M8.698 3.25c-2.29 0-3.1 2.068-3.1 3.101C4.162 6.365 3 7.33 3 8.974c0 1.062.634 1.978 1.543 2.39a2.9 2.9 0 0 0 1.053.214h6.2c.29 0 .672-.057 1.06-.212a2.62 2.62 0 0 0 1.54-2.392c0-1.644-1.16-2.61-2.597-2.622 0-.44-.147-1.066-.492-1.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.254 11.578v5.302c0 1.16.94 2.1 2.1 2.1h2.107M12.42 15.21H8.263"
    />
  </Svg>
);
export default IconlystCloudConnectedBroken;
