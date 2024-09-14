import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarCircleBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m13.556 4.736 1.752 3.5c.173.346.506.583.888.637l3.92.564a1.16 1.16 0 0 1 .653 1.986l-2.835 2.723a1.15 1.15 0 0 0-.339 1.031l.67 3.845a1.177 1.177 0 0 1-1.713 1.227l-3.501-1.815a1.2 1.2 0 0 0-1.1 0L8.449 20.25a1.176 1.176 0 0 1-1.712-1.227l.67-3.845a1.15 1.15 0 0 0-.338-1.03L4.23 11.423a1.16 1.16 0 0 1 .654-1.986l3.919-.564a1.18 1.18 0 0 0 .89-.636l1.754-3.502a1.188 1.188 0 0 1 2.109 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 12.916c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarCircleBulk;
