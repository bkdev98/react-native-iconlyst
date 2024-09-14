import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapCloseBroken = ({
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
      d="m18.656 18.215 2.063 2.063M18.656 18.216l-2.064-2.065M18.656 18.216l2.063-2.065M16.592 20.278l2.064-2.063M21.25 11.886V4.83c0-.76-.778-1.265-1.469-.954L16.223 5.46a1.5 1.5 0 0 1-1.129.04L9.408 3.433a1.5 1.5 0 0 0-1.128.039L4.39 5.2a1.92 1.92 0 0 0-1.14 1.753v3.166M11.572 19.737l-2.164-.788a1.5 1.5 0 0 0-1.128.039L4.716 20.57a1.043 1.043 0 0 1-1.466-.954v-6.33M15.665 5.588v6.299M8.836 18.857V7.475"
    />
  </Svg>
);
export default IconlystMapCloseBroken;
