import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwap3Bulk = ({
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
      d="m22.21 10.709-4.5 4.5c-.09.09-.2.16-.32.21-.05.02-.09.04-.14.04a.7.7 0 0 1-.25.04.7.7 0 0 1-.25-.04c-.05 0-.09-.02-.14-.04a1 1 0 0 1-.32-.21L8 6.919l-3.79 3.79c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41l4.46-4.46.04-.04c.05-.05.1-.09.15-.13q.09-.06.18-.09a1 1 0 0 1 .76 0q.09.03.18.09a2 2 0 0 1 .19.17l8.25 8.25 3.79-3.79c.39-.39 1.03-.39 1.42 0s.39 1.02 0 1.41"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.62 4.58c.12-.05.25-.08.38-.08s.26.03.38.08a1 1 0 0 0-.76 0"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M9 7.92V19c0 .56-.45 1-1 1s-1-.44-1-1V7.92l1-1zM18 1v11.09l-1 1-1-1V1c0-.55.45-1 1-1s1 .45 1 1" />
    </G>
  </Svg>
);
export default IconlystSwap3Bulk;
