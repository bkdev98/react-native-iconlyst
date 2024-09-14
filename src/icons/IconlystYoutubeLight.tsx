import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYoutubeLight = ({
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
      d="M18.806 5.122a2.58 2.58 0 0 1 1.773 1.882c.563 1.679.56 8.35 0 9.954a2.58 2.58 0 0 1-1.773 1.882c-1.574.589-12.04.57-13.612 0a2.58 2.58 0 0 1-1.773-1.807c-.562-1.654-.56-8.35 0-9.991A2.58 2.58 0 0 1 5.194 5.16c1.573-.571 12.038-.571 13.612-.038"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.52 12.43-3.673 2.087a.47.47 0 0 1-.702-.408V9.933a.47.47 0 0 1 .702-.41l3.672 2.088a.47.47 0 0 1 0 .818"
    />
  </Svg>
);
export default IconlystYoutubeLight;
