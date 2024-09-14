import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalkOutline = ({
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
      d="M12.472 7.678a2.714 2.714 0 1 1 0-5.428 2.714 2.714 0 0 1 0 5.428m0-3.929a1.215 1.215 0 1 0-.002 2.43 1.215 1.215 0 0 0 .002-2.43M17.227 14.39a.8.8 0 0 1-.182-.024 4.1 4.1 0 0 1-2.249-1.59c-.216-.28-.413-.567-.607-.853a4.7 4.7 0 0 0-1.739-1.8 2.81 2.81 0 0 0-2.85.138A4.93 4.93 0 0 0 8.02 13.7a.75.75 0 0 1-1.495-.128A6.52 6.52 0 0 1 8.71 9.056a4.26 4.26 0 0 1 4.392-.282 6 6 0 0 1 2.327 2.3c.178.26.357.524.554.78a2.67 2.67 0 0 0 1.426 1.052.75.75 0 0 1-.18 1.478z"
    />
    <Path
      fill={props.color}
      d="M15.582 21.75a.75.75 0 0 1-.593-.29l-3.782-4.87a5.05 5.05 0 0 1-.908-4.32l.792-3.232a.75.75 0 1 1 1.457.357l-.793 3.238a3.55 3.55 0 0 0 .635 3.035l3.784 4.872a.752.752 0 0 1-.592 1.21M7.75 21.75a.75.75 0 0 1-.6-1.2l2.011-2.686a.75.75 0 1 1 1.2.9L8.35 21.45a.75.75 0 0 1-.6.3"
    />
  </Svg>
);
export default IconlystWalkOutline;
