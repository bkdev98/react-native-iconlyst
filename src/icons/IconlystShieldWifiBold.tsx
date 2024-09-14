import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldWifiBold = ({
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
      d="M16.002 10.979a.75.75 0 0 1-.585.28.75.75 0 0 1-.47-.165 4.74 4.74 0 0 0-5.898 0 .75.75 0 1 1-.94-1.17c2.255-1.809 5.525-1.807 7.778 0 .322.26.374.732.115 1.055m-1.687 2.125a.75.75 0 0 1-1.056.088 1.96 1.96 0 0 0-2.512-.001.75.75 0 0 1-1.057-.085.75.75 0 0 1 .084-1.058 3.43 3.43 0 0 1 4.454-.001.75.75 0 0 1 .087 1.057m-1.566 1.616a.75.75 0 0 1-1.5 0c0-.414.336-.77.75-.77s.75.315.75.729zm6.607-9.584C18.65 4.43 13.024 2.5 12 2.5S5.349 4.43 4.644 5.137c-.561.562-.553.995-.51 3.398.018.973.043 2.299.043 4.134 0 6.408 7.6 8.786 7.678 8.809a.48.48 0 0 0 .29 0c.077-.023 7.679-2.401 7.679-8.809 0-1.831.024-3.155.04-4.128.045-2.408.053-2.841-.508-3.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldWifiBold;
