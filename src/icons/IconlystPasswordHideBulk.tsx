import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordHideBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.809 16.81a7.4 7.4 0 0 1 2.154-2.938 5.45 5.45 0 0 1 3.367-1.236 5.6 5.6 0 0 1 1.626.264.34.34 0 0 0 .314-.062 2 2 0 0 1 1.515-.407c.207.03.418-.117.418-.326v-3.38c0-3.308-2.123-5.53-5.283-5.53H7.485c-3.16 0-5.282 2.222-5.282 5.53v4.05c0 3.307 2.123 5.53 5.282 5.53l3.88-.003c.213 0 .359-.216.325-.426a2 2 0 0 1 .119-1.066"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M6.787 10.674a1.011 1.011 0 1 0 2.022-.002 1.011 1.011 0 0 0-2.022.002M11.703 9.664a1.011 1.011 0 0 0 0 2.02c.557 0 1.01-.453 1.01-1.01s-.453-1.01-1.01-1.01M15.609 9.664a1.011 1.011 0 1 1-.003 2.022 1.011 1.011 0 0 1 .003-2.022"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.973 13.875a.75.75 0 1 1 1.06 1.06l-6.293 6.3a.75.75 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l.474-.474a6.1 6.1 0 0 1-1.185-1.867.75.75 0 0 1 0-.56 6.14 6.14 0 0 1 1.789-2.439 4.2 4.2 0 0 1 2.588-.95 4.2 4.2 0 0 1 2.054.565zm-4.263 2.12a4.6 4.6 0 0 0-1.226 1.56c.19.393.452.744.745 1.069l3.048-3.051a2.6 2.6 0 0 0-.932-.189 2.68 2.68 0 0 0-1.635.61"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M20.359 17.259a.749.749 0 1 1 1.377.593c-.909 2.107-2.546 3.364-4.38 3.364a.75.75 0 0 1 0-1.5c1.217 0 2.339-.92 3.003-2.457"
    />
  </Svg>
);
export default IconlystPasswordHideBulk;
