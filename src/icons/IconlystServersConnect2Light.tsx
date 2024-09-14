import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnect2Light = ({
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
      d="M7.135 8.856h9.73a2.924 2.924 0 0 1 2.918 2.929 2.924 2.924 0 0 1-2.919 2.928h-9.73a2.924 2.924 0 0 1-2.918-2.928 2.924 2.924 0 0 1 2.919-2.929"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.592 19.388c0 .89-.72 1.611-1.607 1.611a1.61 1.61 0 0 1-1.606-1.611c0-.89.719-1.612 1.606-1.612s1.607.722 1.607 1.612"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.59 19.388h4.634m-7.846 0H5.744M11.984 17.771v-3.058M7.623 11.785h1.46M7.136 8.857a2.924 2.924 0 0 1-2.92-2.929A2.924 2.924 0 0 1 7.137 3h9.73a2.924 2.924 0 0 1 2.918 2.928 2.924 2.924 0 0 1-2.919 2.929M7.623 5.929h1.46"
    />
  </Svg>
);
export default IconlystServersConnect2Light;
