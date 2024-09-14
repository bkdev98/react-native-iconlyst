import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchScan2Bulk = ({
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
      <Path d="M3 9.22a.75.75 0 0 0 .75-.75V6.89c0-1.732 1.41-3.14 3.143-3.14h1.289a.75.75 0 0 0 0-1.5h-1.29A4.647 4.647 0 0 0 2.25 6.89v1.58c0 .414.336.75.75.75M8.15 20.25H6.892a3.144 3.144 0 0 1-3.142-3.14v-1.58a.75.75 0 0 0-1.5 0v1.58a4.646 4.646 0 0 0 4.642 4.64H8.15a.75.75 0 0 0 0-1.5M21 14.78a.75.75 0 0 0-.75.75v1.58a3.144 3.144 0 0 1-3.142 3.14h-1.29a.75.75 0 0 0 0 1.5h1.29a4.646 4.646 0 0 0 4.642-4.64v-1.58a.75.75 0 0 0-.75-.75M17.107 2.25H15.85a.75.75 0 0 0 0 1.5h1.258a3.145 3.145 0 0 1 3.143 3.14v1.58a.75.75 0 0 0 1.5 0V6.89a4.647 4.647 0 0 0-4.643-4.64" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.403 7.26a3.953 3.953 0 0 0-3.95 3.947 3.957 3.957 0 0 0 3.95 3.955 3.957 3.957 0 0 0 3.95-3.955 3.953 3.953 0 0 0-3.95-3.947M15.99 16.72a.75.75 0 0 0 .53-1.281l-.908-.908a.75.75 0 1 0-1.06 1.062l.909.907a.75.75 0 0 0 .53.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchScan2Bulk;
