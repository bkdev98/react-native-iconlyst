import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthRptationLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Circle
      cx={12.114}
      cy={12.613}
      r={5.5}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.614 12.549c1.493-.486 1.135.764 2.077 1.142 1.012.435 2.475-.096 2.146-1.147a1.5 1.5 0 0 0-.221-.435c-.118-.161-.261-.306-.354-.483a2 2 0 0 1-.178-.48c-.115-.508.186-.979.498-1.396.195-.26.376-.538.387-.684.033-.438-.27-.959-.55-1.613M17.56 12.152c-1.256.409-1.908-.745-2.984-.981-1.426-.313-1.66 1.115-.708 2.068 1.625 2.019-1.628 2.966-.47 4.686"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.114 13.837a9 9 0 0 1-1.11 3.22M17.028 4.928a9 9 0 0 0-3.276-1.281M19.356 7.073a9 9 0 0 1 1.652 3.599M6.1 5.835a9 9 0 0 1 3.823-2.05M3.114 12.329A9 9 0 0 1 4.17 8.304M5.557 18.74a9.04 9.04 0 0 1-2.04-3.5M11.527 21.578a9 9 0 0 1-3.562-1.006M17.776 19.645a9 9 0 0 1-2.752 1.491"
    />
  </Svg>
);
export default IconlystEarthRptationLight;
