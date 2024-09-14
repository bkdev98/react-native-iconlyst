import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard2Outline = ({
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
      d="M4.011 4.412c1-.959 2.4-1.412 4.01-1.412h8.458c1.609 0 3.01.463 4.01 1.437C21.493 5.414 22 6.814 22 8.498v7.09c0 1.663-.51 3.044-1.516 4.005-1.002.956-2.4 1.407-4.006 1.407H8.013c-1.609 0-3.008-.45-4.008-1.408-1.005-.962-1.51-2.343-1.504-4.006V8.422c0-1.663.506-3.046 1.511-4.01M5.05 5.495C4.406 6.112 4 7.065 4 8.422v7.168c-.004 1.355.4 2.305 1.041 2.919.647.62 1.633.99 2.97.99h8.468c1.332 0 2.32-.37 2.969-.99.644-.616 1.052-1.567 1.052-2.922V8.498c0-1.382-.41-2.356-1.057-2.987-.651-.633-1.636-1.011-2.965-1.011H8.022c-1.337 0-2.323.373-2.971.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.828 16.143a.75.75 0 0 1 .75-.75h5.345a.75.75 0 0 1 0 1.5H9.578a.75.75 0 0 1-.75-.75M6.396 8.593a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M13.043 8.593a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M9.72 8.593a.863.863 0 1 1 1.727 0 .863.863 0 0 1-1.726 0M16.367 8.593a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M11.383 11.982a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M8.059 11.982a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0M14.705 11.982a.863.863 0 1 1 1.726 0 .863.863 0 0 1-1.726 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboard2Outline;
