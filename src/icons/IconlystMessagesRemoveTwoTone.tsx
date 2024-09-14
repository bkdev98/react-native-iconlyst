import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesRemoveTwoTone = ({
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
      d="M5.073 7.674c-1.79 2.638-2.025 6.021-.714 8.869.126.317.624 1.197.958 1.777a.97.97 0 0 1-.054 1.052c-.217.308-.497.707-.714 1.033a.874.874 0 0 0 .723 1.361c2.35 0 6.326-.008 7.212 0a8.85 8.85 0 0 0 5.08-1.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.94 4.98a8.976 8.976 0 0 1 11.658 2.186c2.305 2.93 2.504 7.037.66 10.174"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.5 6.094 15.58 15.633"
    />
  </Svg>
);
export default IconlystMessagesRemoveTwoTone;
