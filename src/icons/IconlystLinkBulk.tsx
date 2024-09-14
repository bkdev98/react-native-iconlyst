import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkBulk = ({
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
      <Path d="M9.63 18.21H8.21A6.217 6.217 0 0 1 2 12a6.217 6.217 0 0 1 6.21-6.21h1.42a1 1 0 1 1 0 2H8.21A4.215 4.215 0 0 0 4 12a4.215 4.215 0 0 0 4.21 4.21h1.42a1 1 0 1 1 0 2M15.79 18.21h-1.42a1 1 0 1 1 0-2h1.42A4.215 4.215 0 0 0 20 12a4.215 4.215 0 0 0-4.21-4.21h-1.42a1 1 0 1 1 0-2h1.42A6.217 6.217 0 0 1 22 12a6.217 6.217 0 0 1-6.21 6.21" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.28 13H8.72a1 1 0 1 1 0-2h6.56a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkBulk;
