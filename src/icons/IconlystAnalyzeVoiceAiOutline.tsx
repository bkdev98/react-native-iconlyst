import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnalyzeVoiceAiOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.655 10.162a.75.75 0 0 1 .748.752 6.473 6.473 0 0 0 6.456 6.488 6.47 6.47 0 0 0 5.504-3.09.75.75 0 0 1 1.278.786 7.97 7.97 0 0 1-6.78 3.804h-.003a7.973 7.973 0 0 1-7.955-7.992.75.75 0 0 1 .752-.748"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.86 17.402a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.848a.75.75 0 0 1 .75-.75M10.86 3.75a2.91 2.91 0 0 0-2.91 2.91v4.223a2.917 2.917 0 0 0 2.91 2.924 2.92 2.92 0 0 0 2.754-1.976.75.75 0 1 1 1.42.484 4.42 4.42 0 0 1-4.171 2.992h-.005A4.417 4.417 0 0 1 6.45 10.88V6.66a4.41 4.41 0 0 1 4.41-4.409.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.862 8.949a.75.75 0 0 1-.704-.49l-.1-.273a3.01 3.01 0 0 0-1.78-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.78-1.783l.1-.273a.75.75 0 0 1 1.407 0l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.779 1.783l-.1.273a.75.75 0 0 1-.704.49m.948-3.35a4.5 4.5 0 0 1-.948-.949 4.5 4.5 0 0 1-.949.95c.362.267.681.587.949.949.267-.362.587-.682.948-.95M19.17 11.463a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAnalyzeVoiceAiOutline;
