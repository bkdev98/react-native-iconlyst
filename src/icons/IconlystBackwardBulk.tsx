import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackwardBulk = ({
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
      d="M3.641 9.769a19.3 19.3 0 0 1 5.668-3.59c1.83-.727 3.361.18 3.587 2 .273 2.684.267 5.253 0 7.65-.246 1.892-1.935 2.694-3.587 1.992-2.118-.875-4.017-2.063-5.668-3.59-1.41-1.29-1.445-3.122 0-4.462"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.113 9.769a19.3 19.3 0 0 1 5.668-3.59c1.829-.727 3.36.18 3.587 2 .273 2.684.267 5.253 0 7.65-.246 1.892-1.933 2.694-3.587 1.992-2.118-.875-4.016-2.063-5.668-3.59-1.41-1.29-1.445-3.122 0-4.462"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBackwardBulk;
