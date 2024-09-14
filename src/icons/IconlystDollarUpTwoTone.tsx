import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarUpTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.34 14.592 2.137-.615.615 2.136"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.48 21.062 2.254-3.635 4.93 1.476 2.815-4.926M13.394 8.283H11.11a1.23 1.23 0 1 0 0 2.46h1.406a1.23 1.23 0 0 1 0 2.462H10.23M11.813 13.204v1.033m0-6.993v1.042"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.715 10.966A7.904 7.904 0 1 0 7.392 17.52"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDollarUpTwoTone;
