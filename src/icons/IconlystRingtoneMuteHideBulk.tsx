import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneMuteHideBulk = ({
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
      d="m20.145 4.153-15.23 15.23c-.15.14-.34.22-.53.22s-.38-.08-.53-.22a.754.754 0 0 1 0-1.06l1.83-1.83c-.85-.59-1.31-1.44-1.41-2.58 0-1.41.4-2.11.79-2.79.4-.69.78-1.35.78-2.9 0-2.82 2.51-5.85 6.26-5.85 2.06 0 3.95.97 5.13 2.57l1.85-1.85c.29-.29.76-.29 1.06 0 .29.29.29.77 0 1.06"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M19.945 13.873c-.26 3.16-3.07 3.77-7.84 3.77-.71 0-1.37-.01-1.97-.05a.49.49 0 0 1-.44-.32.5.5 0 0 1 .12-.53l7.8-7.69c.13-.13.33-.17.51-.11.17.05.3.21.33.39.14.81.41 1.29.7 1.8.39.67.79 1.37.79 2.74M14.246 19.102h-4.203a.752.752 0 0 0-.585 1.219 3.43 3.43 0 0 0 2.682 1.307 3.44 3.44 0 0 0 2.69-1.307.749.749 0 0 0-.584-1.22" />
    </G>
  </Svg>
);
export default IconlystRingtoneMuteHideBulk;
