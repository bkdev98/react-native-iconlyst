import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieReelBulk = ({
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
      d="M22.324 12.003c0 3.41-1.78 6.41-4.46 8.12a9.6 9.6 0 0 1-5.16 1.5c-5.3 0-9.62-4.31-9.62-9.62 0-5.3 4.32-9.62 9.62-9.62s9.62 4.32 9.62 9.62"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.707 14.486c-.943 0-1.709.763-1.709 1.7 0 .944.767 1.71 1.709 1.71a1.71 1.71 0 0 0 1.707-1.71c0-.937-.766-1.7-1.707-1.7M8.524 10.297a1.71 1.71 0 0 0 0 3.42 1.71 1.71 0 0 0 0-3.42M12.707 6.117a1.71 1.71 0 0 0-1.709 1.71c0 .936.767 1.7 1.709 1.7.94 0 1.707-.764 1.707-1.7a1.71 1.71 0 0 0-1.707-1.71M16.887 10.297a1.71 1.71 0 0 0 0 3.42 1.71 1.71 0 0 0 0-3.42M22.585 20.873c0 .42-.33.75-.75.75h-9.13c1.89 0 3.67-.55 5.16-1.5h3.97c.42 0 .75.34.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovieReelBulk;
