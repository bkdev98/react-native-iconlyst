import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongSlideBulk = ({
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
      d="M19.19 7.06v9.88a3.615 3.615 0 0 1-3.62 3.62H9.58a3.615 3.615 0 0 1-3.62-3.62V7.06a3.615 3.615 0 0 1 3.62-3.62h5.99a3.615 3.615 0 0 1 3.62 3.62"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.029 14.73a.99.99 0 1 1 .989-.993v.007a.99.99 0 0 1-.99.987m3.556-5.522c-.784-.16-1.106-.931-1.117-.957a.75.75 0 0 0-1.45.269v2.939a2.5 2.5 0 0 0-.99-.207 2.49 2.49 0 0 0-2.488 2.49 2.49 2.49 0 0 0 2.489 2.489 2.493 2.493 0 0 0 2.49-2.49l-.001-.01v-3.328c.225.12.48.216.768.275.4.08.802-.18.885-.586a.75.75 0 0 0-.586-.884M5.96 16.94c0 .36.05.7.15 1.03h-.2c-1.71 0-3.09-1.39-3.09-3.1V9.13c0-1.71 1.38-3.1 3.09-3.1h.2c-.1.33-.15.67-.15 1.03v.47h-.05c-.88 0-1.59.72-1.59 1.6v5.74c0 .88.71 1.6 1.59 1.6h.05zM22.32 9.13v5.74a3.1 3.1 0 0 1-3.09 3.1h-.19c.1-.33.15-.67.15-1.03v-.47h.04c.87 0 1.59-.72 1.59-1.6V9.13c0-.88-.72-1.6-1.59-1.6h-.04v-.47c0-.36-.05-.7-.15-1.03h.19a3.1 3.1 0 0 1 3.09 3.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongSlideBulk;
