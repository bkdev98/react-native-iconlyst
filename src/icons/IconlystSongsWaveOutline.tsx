import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsWaveOutline = ({
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
      d="M12.25 2.367a.75.75 0 0 1 .75.75v17.764a.75.75 0 0 1-1.5 0V3.117a.75.75 0 0 1 .75-.75M7.766 5.693a.75.75 0 0 1 .75.75v11.252a.75.75 0 0 1-1.5 0V6.443a.75.75 0 0 1 .75-.75M16.732 5.553a.75.75 0 0 1 .75.75v11.252a.75.75 0 0 1-1.5 0V6.303a.75.75 0 0 1 .75-.75M21.217 9.002a.75.75 0 0 1 .75.75v4.211a.75.75 0 0 1-1.5 0V9.752a.75.75 0 0 1 .75-.75M3.283 9.285a.75.75 0 0 1 .75.75v4.212a.75.75 0 0 1-1.5 0v-4.212a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsWaveOutline;
