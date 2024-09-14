import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFtxTokenBulk = ({
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
      d="M17.9 9.345h-6.703a.5.5 0 0 0-.5.5v4.229a.5.5 0 0 0 .5.5H17.9a.5.5 0 0 0 .5-.5v-4.23a.5.5 0 0 0-.5-.5M8.5 14.255v-4.5a.5.5 0 0 0-.5-.5H3.5a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 .5-.5"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M12.5 16.004H8a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5M21.5 2.504H8.9a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h12.6a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5" />
    </G>
  </Svg>
);
export default IconlystFtxTokenBulk;
