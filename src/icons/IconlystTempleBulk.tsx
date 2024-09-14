import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTempleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20.95 20.55H3.99c-.41 0-.75.34-.75.75s.34.75.75.75h16.96a.749.749 0 1 0 0-1.5M3.99 12.55h16.96a.749.749 0 1 0 0-1.5h-.88c-.35-3.61-3.24-6.5-6.85-6.85v-.9a.749.749 0 1 0-1.5 0v.9c-3.61.35-6.5 3.24-6.85 6.85h-.88c-.41 0-.75.34-.75.75s.34.75.75.75" />
    </G>
    <Path
      fill={props.color}
      d="M6.081 20.55h-1.5v-8h1.5zM8.151 20.55h1.5v-8h-1.5zM13.221 20.55h-1.5v-8h1.5zM15.291 20.55h1.5v-8h-1.5zM20.361 20.55h-1.5v-8h1.5z"
    />
  </Svg>
);
export default IconlystTempleBulk;
