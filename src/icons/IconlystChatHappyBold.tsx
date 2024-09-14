import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatHappyBold = ({
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
      d="M16.302 11.76a4.37 4.37 0 0 1-4.002 2.612 4.37 4.37 0 0 1-4.001-2.612.75.75 0 0 1 1.374-.602 2.87 2.87 0 0 0 2.627 1.714 2.87 2.87 0 0 0 2.629-1.714.749.749 0 1 1 1.373.602m1.06-8.42H7.24c-2.31 0-4.19 1.885-4.19 4.202v6.939c0 2.318 1.88 4.203 4.19 4.203h1.069c.503 0 .994.204 1.348.56l1.422 1.427c.327.328.76.508 1.222.508.463 0 .896-.181 1.22-.508l1.423-1.426a1.9 1.9 0 0 1 1.35-.561h1.068c2.31 0 4.189-1.885 4.189-4.203V7.54c0-2.316-1.88-4.201-4.19-4.201"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatHappyBold;
