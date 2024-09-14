import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddStarOutline = ({
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
      d="M12.614 3.75a8.25 8.25 0 1 0 1.443 16.374.75.75 0 1 1 .261 1.477A9.75 9.75 0 0 1 2.864 12c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75c0 .901-.122 1.774-.352 2.604a.75.75 0 0 1-1.445-.401A8.25 8.25 0 0 0 12.615 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.57 15.826a.75.75 0 0 1 .75.75v3.645a.75.75 0 0 1-1.5 0v-3.645a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.995 18.4a.75.75 0 0 1 .75-.75h3.648a.75.75 0 0 1 0 1.5h-3.648a.75.75 0 0 1-.75-.75M12.614 7a.75.75 0 0 1 .718.531 5.64 5.64 0 0 0 3.75 3.752.75.75 0 0 1 0 1.435 5.64 5.64 0 0 0-3.75 3.75.75.75 0 0 1-1.435 0 5.64 5.64 0 0 0-3.751-3.75.75.75 0 0 1 0-1.435 5.64 5.64 0 0 0 3.75-3.752.75.75 0 0 1 .718-.531m-2.421 5a7.14 7.14 0 0 1 2.421 2.422A7.14 7.14 0 0 1 15.036 12a7.14 7.14 0 0 1-2.422-2.422A7.14 7.14 0 0 1 10.193 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddStarOutline;
