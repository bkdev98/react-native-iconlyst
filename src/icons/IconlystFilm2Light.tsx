import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.12 16.517V7.484C3.12 4.72 5.07 3 7.83 3h8.339c2.76 0 4.711 1.721 4.711 4.485v9.032C20.88 19.28 18.93 21 16.17 21H7.83c-2.761 0-4.712-1.728-4.712-4.483M6.91 3.117v17.765M17.09 20.883V3.117M3.145 7.527h3.762m-3.762 8.905h3.762M20.881 7.527h-3.787m3.787 8.905h-3.787M3.145 11.977H20.88"
    />
  </Svg>
);
export default IconlystFilm2Light;
