import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowerOutline = ({
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
      d="M11.819 2.283A3.25 3.25 0 0 1 15.526 5.5v1.35a.75.75 0 0 1-1.5 0V5.5a1.75 1.75 0 0 0-1.995-1.732l-4.49.641A1.75 1.75 0 0 0 6.037 6.14v10.778a.75.75 0 0 1-1.5 0V6.14a3.25 3.25 0 0 1 2.79-3.216z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.956 7.604a3.684 3.684 0 0 0-3.864 3.681v.126c0 .048.039.086.086.086h7.197a.087.087 0 0 0 .087-.086c0-2.017-1.548-3.715-3.506-3.807m.07-1.498a5.184 5.184 0 0 0-5.434 5.18v.125c0 .876.71 1.586 1.586 1.586h7.197c.877 0 1.587-.71 1.587-1.586 0-2.761-2.122-5.173-4.935-5.305M11.998 14.48a.75.75 0 0 1 .75.75v2.161a.75.75 0 1 1-1.5 0v-2.16a.75.75 0 0 1 .75-.75m5.557 0a.75.75 0 0 1 .75.75v2.161a.75.75 0 0 1-1.5 0v-2.16a.75.75 0 0 1 .75-.75m-2.778 0a.75.75 0 0 1 .75.75v.483a.75.75 0 0 1-1.5 0v-.482a.75.75 0 0 1 .75-.75m0 3.097a.75.75 0 0 1 .75.75v1.32a.75.75 0 0 1-1.5 0v-1.32a.75.75 0 0 1 .75-.75m-2.779 1.679a.75.75 0 0 1 .75.75V21a.75.75 0 1 1-1.5 0v-.994a.75.75 0 0 1 .75-.75m5.557 0a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-.994a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShowerOutline;
