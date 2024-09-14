import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChainlinkBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.544 13.335c0 .616-.334 1.194-.873 1.507l-2.295 1.33a1.74 1.74 0 0 1-1.754 0l-2.293-1.33a1.75 1.75 0 0 1-.874-1.508v-2.65c0-.622.335-1.204.872-1.517l2.3-1.324a1.75 1.75 0 0 1 1.75.003l2.291 1.319c.542.315.876.897.876 1.52zm-3.918-4.191 2.29 1.318c.08.046.128.13.128.222v2.651a.25.25 0 0 1-.127.21l-2.294 1.331a.24.24 0 0 1-.247-.001l-2.294-1.33a.25.25 0 0 1-.127-.21v-2.651c0-.092.048-.176.124-.22l2.3-1.322a.24.24 0 0 1 .247.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChainlinkBulk;
