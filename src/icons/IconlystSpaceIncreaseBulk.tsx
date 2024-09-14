import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceIncreaseBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.965 12.621a1 1 0 0 0-1 1v2.331l-.975-.948a1 1 0 0 0-1.394 1.433l2.67 2.6q.135.13.301.202h.001l.001.001.002.001.002.001.015.006q.173.07.371.073h.024a1 1 0 0 0 .37-.077l.008-.005h.004l.001-.002h.002q.163-.072.297-.2l2.671-2.6a1 1 0 0 0-1.394-1.433l-.977.95v-2.333a1 1 0 0 0-1-1M15.336 7.564l-2.67-2.598a1 1 0 0 0-.3-.202v-.001l-.004-.001V4.76q-.006 0-.004-.001l-.016-.007a1 1 0 0 0-.36-.073h-.023c-.137 0-.267.03-.386.079.001.003-.003.002-.003.002h-.002l-.003.002a1 1 0 0 0-.299.202l-2.67 2.599A1 1 0 1 0 9.99 8.998l.975-.95v2.183a1 1 0 1 0 2 0V8.047l.976.95a1 1 0 0 0 1.395-1.434"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.684 20H6.316a1 1 0 1 0 0 2h11.368a1 1 0 1 0 0-2M6.316 4h11.368a1 1 0 1 0 0-2H6.316a1 1 0 1 0 0 2" />
    </G>
  </Svg>
);
export default IconlystSpaceIncreaseBulk;
