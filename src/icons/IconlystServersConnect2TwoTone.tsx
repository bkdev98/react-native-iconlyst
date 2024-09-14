import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnect2TwoTone = ({
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
      d="M7.635 8.856h9.73a2.924 2.924 0 0 1 2.918 2.929 2.924 2.924 0 0 1-2.919 2.928h-9.73a2.924 2.924 0 0 1-2.918-2.928 2.924 2.924 0 0 1 2.919-2.929"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.092 19.388c0 .89-.72 1.611-1.607 1.611a1.61 1.61 0 0 1-1.606-1.611c0-.89.719-1.612 1.606-1.612s1.607.722 1.607 1.612"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.09 19.388h4.634m-7.846 0H6.244M12.484 17.771v-3.058"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.123 11.785h1.46"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.636 8.857a2.924 2.924 0 0 1-2.92-2.929A2.924 2.924 0 0 1 7.637 3h9.73a2.924 2.924 0 0 1 2.918 2.928 2.924 2.924 0 0 1-2.919 2.929M8.123 5.929h1.46"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystServersConnect2TwoTone;
