import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBoardLight = ({
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
      d="M13.977 20.066h3.504c2.88 0 4.67-2.031 4.67-4.906V8.483c0-2.875-1.79-4.905-4.669-4.905h-7.82c-2.05 0-3.554 1.037-4.245 2.68M17.958 16.695h-2.339M2.15 20.42c0-1.383 1.091-3.104 4.233-3.104 3.143 0 4.233 1.709 4.233 3.091"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.087 12.054a2.704 2.704 0 1 1-5.408 0 2.704 2.704 0 0 1 5.408 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserBoardLight;
