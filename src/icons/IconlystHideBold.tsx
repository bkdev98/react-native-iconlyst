import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHideBold = ({
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
      d="M21.46 11.805c-.48-1.13-1.09-2.2-1.81-3.17a.52.52 0 0 0-.37-.19.48.48 0 0 0-.39.14l-2.94 2.98a.32.32 0 0 0-.087.264c.242 2.02-1.894 4.287-3.974 4.003a.32.32 0 0 0-.272.087L9.19 18.345c-.13.12-.18.3-.14.47a.5.5 0 0 0 .33.36c.87.28 1.75.42 2.62.42 3.92 0 7.46-2.76 9.46-7.4.05-.12.05-.27 0-.39M8.17 11.996c0-1.02.4-1.98 1.12-2.71.36-.36.79-.63 1.25-.81.12-.05.23-.09.35-.12q.54-.18 1.14-.18c.649 0 1.256.159 1.793.442.168.09.19.314.056.448l-.702.703a.32.32 0 0 1-.34.069 2.6 2.6 0 0 0-.867-.152h-.07c-.04 0-.09 0-.13.01-.05 0-.1.01-.15.02-.09.01-.19.03-.28.06-.06.02-.12.04-.17.06-.06.03-.11.06-.17.08-.76.39-1.29 1.17-1.29 2.08q.001.429.146.814a.33.33 0 0 1-.067.346l-.712.713c-.133.133-.356.112-.446-.054a3.8 3.8 0 0 1-.461-1.82m1.725 3.18.008-.004 1.087-1.096 3.12-3.12 1.096-1.087.004-.008q0-.006.003-.009l4.997-4.996c.29-.29.29-.76 0-1.06a.754.754 0 0 0-1.06 0l-2.2 2.2c-1.44-1.02-3.18-1.57-4.96-1.6-1.99.03-3.94.73-5.48 2a13.76 13.76 0 0 0-3.97 5.42c-.05.12-.05.25 0 .37.74 1.86 1.89 3.53 3.35 4.87l-2.09 2.09c-.3.3-.3.77 0 1.06.14.15.34.22.53.22s.38-.07.53-.22l5.026-5.027z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHideBold;