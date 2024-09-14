import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilmCheckBold = ({
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
      d="M16.847 6.43a.3.3 0 0 0 .3.299h4.3a.286.286 0 0 0 .286-.345c-.498-2.24-2.305-3.754-4.598-3.876a.287.287 0 0 0-.3.292c.003.704.01 2.486.012 3.63M15.047 6.729a.3.3 0 0 0 .3-.3c.001-1.143.01-2.925.013-3.629 0-.166-.134-.3-.3-.3h-4.453c-.166 0-.3.134-.3.3.003.702.01 2.477.012 3.63a.3.3 0 0 0 .3.299zM16.065 12.67l-3.616 3.62a.75.75 0 0 1-1.062-.002l-1.756-1.76a.75.75 0 1 1 1.062-1.058l1.226 1.227 3.084-3.088a.751.751 0 0 1 1.062 1.06M4.085 8.23a.3.3 0 0 0-.3.3v7.7c0 3.151 2.027 5.27 5.044 5.27h8.012c3.016 0 5.043-2.119 5.043-5.27v-7.7a.3.3 0 0 0-.3-.3zM8.52 6.729a.3.3 0 0 0 .3-.3c0-1.143.008-2.925.012-3.629a.287.287 0 0 0-.3-.292c-2.292.123-4.099 1.64-4.596 3.876-.04.18.102.345.286.345z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilmCheckBold;
