import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.62 16.517V7.484C3.62 4.72 5.57 3 8.33 3h8.339c2.76 0 4.711 1.721 4.711 4.485v9.032C21.38 19.28 19.43 21 16.67 21H8.33c-2.761 0-4.712-1.728-4.712-4.483"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.41 3.118v17.765m10.18 0V3.117M3.645 7.527h3.762M3.645 16.43h3.762M21.38 7.526h-3.787m3.787 8.905h-3.787m-13.95-4.453h17.737"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFilm2TwoTone;
