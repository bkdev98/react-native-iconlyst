import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyAddTwoTone = ({
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
      d="M21.5 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.724 18.538h-4.269m2.135-2.14v4.276M9.57 9.505v-.051M9.523 9.3a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M16.03 9.505v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.6 13.5c0 1.436-1.365 2.6-3.05 2.6S9.5 14.936 9.5 13.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHappyAddTwoTone;
