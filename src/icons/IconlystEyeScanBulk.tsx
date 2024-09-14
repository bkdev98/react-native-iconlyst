import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeScanBulk = ({
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
      <Path d="M8.15 20.25H6.893a3.145 3.145 0 0 1-3.143-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.647 4.647 0 0 0 4.643 4.64H8.15a.75.75 0 0 0 0-1.5M21 14.781a.75.75 0 0 0-.75.75v1.58c0 1.732-1.41 3.14-3.142 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.646 4.646 0 0 0 4.642-4.64v-1.58a.75.75 0 0 0-.75-.75M17.107 2.251H15.85a.75.75 0 0 0 0 1.5h1.257a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0v-1.58a4.647 4.647 0 0 0-4.643-4.64M3 9.22a.75.75 0 0 0 .75-.75V6.89c0-1.732 1.41-3.14 3.143-3.14h1.29a.75.75 0 0 0 0-1.5h-1.29A4.647 4.647 0 0 0 2.25 6.89v1.58c0 .414.336.75.75.75" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 13.016c-.56 0-1.01-.45-1.01-1.01 0-.55.45-1.01 1.01-1.01s1.01.46 1.01 1.01c0 .56-.45 1.01-1.01 1.01m5.76-.82c.06-.12.06-.27 0-.39-1.21-2.81-3.36-4.49-5.76-4.49s-4.55 1.68-5.76 4.49c-.05.12-.05.27 0 .39 1.2 2.81 3.36 4.48 5.76 4.48s4.56-1.67 5.76-4.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEyeScanBulk;
