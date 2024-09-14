import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterLight = ({
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
      d="M18.794 4.654a2.56 2.56 0 0 1 2.56 2.56v1.301a3.6 3.6 0 0 1-1.188 2.67l-4.697 4.645a1.47 1.47 0 0 0-.484 1.09v1.896c0 .6-.367 1.14-.925 1.363l-1.795.715a1.468 1.468 0 0 1-2.01-1.364v-3.075c0-.389-.154-.762-.43-1.037l-4.163-3.707A3.6 3.6 0 0 1 4.61 9.17V7.214a2.56 2.56 0 0 1 2.56-2.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.98 3v5.752m2.234-3.51L12.98 3l-2.233 2.243"
    />
  </Svg>
);
export default IconlystFilterLight;
