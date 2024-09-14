import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReel2Bold = ({
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
      d="M17.42 13.415a1.626 1.626 0 1 1 1.63-1.63c0 .9-.73 1.63-1.63 1.63m-3.93-3.94c-.9 0-1.62-.73-1.62-1.63a1.62 1.62 0 1 1 3.24 0c0 .9-.73 1.63-1.62 1.63m0 7.87c-.9 0-1.62-.72-1.62-1.62a1.62 1.62 0 1 1 1.62 1.62m-3.94-3.93c-.9 0-1.62-.73-1.62-1.63a1.62 1.62 0 1 1 3.24 0c0 .9-.73 1.63-1.62 1.63m3.94-10.72c-5.02 0-9.1 4.08-9.1 9.09 0 3.35 1.82 6.27 4.52 7.86-.23.09-.48.16-.76.16-.49 0-.75-.18-1.11-.44-.34-.24-.76-.53-1.35-.61-1.26-.18-2.24.64-2.35.74-.31.27-.34.74-.07 1.05.26.31.74.35 1.05.08.01 0 .57-.47 1.17-.38.22.03.4.14.68.35.43.3 1.01.71 1.98.71 1.09 0 1.93-.54 2.37-.92.93.32 1.93.5 2.97.5 5.01 0 9.09-4.08 9.09-9.1 0-5.01-4.08-9.09-9.09-9.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieReel2Bold;
