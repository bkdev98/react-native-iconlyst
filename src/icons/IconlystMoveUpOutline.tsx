import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoveUpOutline = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.75 6.466a2.45 2.45 0 0 1 2.45-2.45h2.6a2.45 2.45 0 0 1 2.45 2.45v2.6a2.45 2.45 0 0 1-2.45 2.45h-2.6a2.45 2.45 0 0 1-2.45-2.45zm2.45-.95a.95.95 0 0 0-.95.95v2.6c0 .524.425.95.95.95h2.6a.95.95 0 0 0 .95-.95v-2.6a.95.95 0 0 0-.95-.95zM13.75 16.466a2.45 2.45 0 0 1 2.45-2.45h2.6a2.45 2.45 0 0 1 2.45 2.45v2.6a2.45 2.45 0 0 1-2.45 2.45h-2.6a2.45 2.45 0 0 1-2.45-2.45zm2.45-.95a.95.95 0 0 0-.95.95v2.6c0 .524.425.95.95.95h2.6a.95.95 0 0 0 .95-.95v-2.6a.95.95 0 0 0-.95-.95zM5.727 9.367A6.75 6.75 0 0 0 10.5 20.89a.75.75 0 0 0 0-1.5 5.25 5.25 0 0 1-3.712-8.962C7.96 9.255 9.38 8.626 11.434 8.503a.75.75 0 1 0-.09-1.498c-2.365.143-4.15.894-5.617 2.362"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.245 5.939a.75.75 0 0 0 .28 1.023l1.878 1.069-1.069 1.878a.75.75 0 0 0 1.304.742l1.44-2.53a.75.75 0 0 0-.28-1.023l-2.53-1.44a.75.75 0 0 0-1.023.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoveUpOutline;
