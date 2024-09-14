import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHatTwoTone = ({
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
      d="M15.22 15.09c0-3.848-1.44-8.014-3.219-8.014s-3.22 4.166-3.22 8.014"
      opacity={0.4}
    />
    <Circle
      r={1.746}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 12 5.33)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.53 14.936c1.349.495 1.7 1.396 1.72 2.98.038 3.163-1.971 3.647-9.25 3.73-7.279-.083-9.288-.567-9.25-3.73.02-1.584.371-2.486 1.72-2.98"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 7.076c-4.15 0-7.514 4.166-7.514 8.014 5.929 1.088 9.113 1.078 15.028 0 0-3.848-3.363-8.014-7.513-8.014"
    />
  </Svg>
);
export default IconlystHatTwoTone;
