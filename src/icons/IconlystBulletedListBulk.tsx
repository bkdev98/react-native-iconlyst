import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBulletedListBulk = ({
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
      <Path d="M20.126 16.994h-12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2M8.126 6.994h12a1 1 0 1 0 0-2h-12a1 1 0 1 0 0 2M4.135 4.734c-.695 0-1.26.57-1.26 1.27a1.262 1.262 0 0 0 2.522 0c0-.7-.567-1.27-1.262-1.27M4.135 16.734c-.695 0-1.26.57-1.26 1.27a1.262 1.262 0 0 0 2.522 0c0-.7-.567-1.27-1.262-1.27" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.126 10.994h-12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2M4.135 10.875c-.695 0-1.26.565-1.26 1.26a1.263 1.263 0 0 0 2.522 0c0-.695-.567-1.26-1.262-1.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBulletedListBulk;
