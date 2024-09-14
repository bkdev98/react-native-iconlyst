import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteTerminalBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.2 8.742a.3.3 0 0 0 .3-.3v-.416c0-3.305-2.123-5.526-5.283-5.526H7.783C4.623 2.5 2.5 4.721 2.5 8.026v.416a.3.3 0 0 0 .3.3zM2.8 10.242a.3.3 0 0 0-.3.3v5.431c0 3.306 2.124 5.527 5.284 5.527h8.433c3.16 0 5.283-2.22 5.283-5.527v-5.43a.3.3 0 0 0-.3-.3z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.29 5.8c.413 0 .754.337.754.75 0 .415-.33.75-.745.75h-.01a.75.75 0 0 1 0-1.5m2.485 0c.414 0 .755.337.755.75 0 .415-.33.75-.745.75h-.01a.75.75 0 0 1 0-1.5m2.486 0c.414 0 .756.337.756.75 0 .415-.332.75-.746.75h-.01a.75.75 0 0 1 0-1.5M15.479 17.959h-2.736a.75.75 0 0 1 0-1.5h2.736a.75.75 0 0 1 0 1.5m-4.461-2.66-1.964 1.964a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l1.433-1.434-1.433-1.434a.749.749 0 1 1 1.06-1.06l1.964 1.964a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteTerminalBulk;
