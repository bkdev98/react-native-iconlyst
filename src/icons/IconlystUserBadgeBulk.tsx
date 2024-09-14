import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBadgeBulk = ({
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
      d="M16.3 2.3H8c-3 0-5 2.1-5 5.2v7c0 3.1 2 5.1 5 5.1h1.8l1.9 1.9c.1.1.3.2.5.2s.4-.1.5-.2l1.8-1.9h1.8c3 0 5-2.1 5-5.1v-7c0-3.1-2-5.2-5-5.2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m8.264 16.116 7.775-.011a.45.45 0 0 0 .45-.451c0-1.638-1.341-3.29-4.339-3.29-2.996 0-4.338 1.658-4.338 3.3 0 .12.048.235.132.32.085.084.2.132.32.132M14.966 8.154a2.82 2.82 0 0 0-2.815-2.816 2.82 2.82 0 0 0-2.815 2.816 2.82 2.82 0 0 0 2.814 2.815 2.82 2.82 0 0 0 2.816-2.815"
    />
  </Svg>
);
export default IconlystUserBadgeBulk;
