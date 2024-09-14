import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveCircleBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.341 14.293a.75.75 0 0 0 .75-.75v-3.086a.75.75 0 0 0-1.5 0v3.086c0 .414.336.75.75.75M12.57 17.152a.75.75 0 0 0 .75-.75V7.598a.75.75 0 0 0-1.5 0v8.804c0 .414.336.75.75.75M8.8 14.293a.75.75 0 0 0 .75-.75v-3.086a.75.75 0 0 0-1.5 0v3.086c0 .414.335.75.75.75"
    />
  </Svg>
);
export default IconlystSongsWaveCircleBulk;
