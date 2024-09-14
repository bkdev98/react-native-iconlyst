import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationLight = ({
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
      d="M19.7 17.146 13.69 5.091c-.728-1.462-2.816-1.453-3.532.015L4.292 17.132c-.798 1.637.862 3.387 2.538 2.677l4.32-1.83a1.97 1.97 0 0 1 1.522-.006l4.51 1.87c1.683.698 3.33-1.067 2.517-2.697"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationLight;
