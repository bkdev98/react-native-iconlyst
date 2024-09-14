import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLightbulbOutline = ({
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
      d="M13.28 4.017c-3.91-.792-7.342 2.165-7.342 5.927a6.02 6.02 0 0 0 3.679 5.557.75.75 0 0 1 .458.69v2.266c0 1.06.871 1.93 1.93 1.93 1.06 0 1.93-.87 1.93-1.93v-2.254a.75.75 0 0 1 .458-.69c2.517-1.065 4.162-3.843 3.535-6.868-.481-2.3-2.349-4.158-4.648-4.628M4.438 9.944c0-4.697 4.289-8.38 9.14-7.397h.002c2.885.59 5.213 2.904 5.816 5.791v.001a7.58 7.58 0 0 1-3.96 8.343v1.775a3.44 3.44 0 0 1-3.431 3.43 3.44 3.44 0 0 1-3.43-3.43V16.67a7.52 7.52 0 0 1-4.137-6.727"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.504 16.207a.75.75 0 0 1 .75-.75h2.438a.75.75 0 0 1 0 1.5h-2.438a.75.75 0 0 1-.75-.75M10.118 7.4a.75.75 0 0 1 .13 1.054 2.22 2.22 0 1 0 3.505 0 .75.75 0 0 1 1.182-.923 3.72 3.72 0 1 1-5.87 0 .75.75 0 0 1 1.053-.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 5.742a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLightbulbOutline;
