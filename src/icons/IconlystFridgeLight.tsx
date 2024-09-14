import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFridgeLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.8 3h6.4c1.694 0 2.748 1.196 2.748 2.888v12.224c0 1.692-1.054 2.888-2.749 2.888H8.8c-1.692 0-2.746-1.196-2.746-2.888V5.888C6.053 4.196 7.112 3 8.8 3M15.041 7.474h-1.76M15.041 12.498h-1.76M6.053 9.987h11.895"
    />
  </Svg>
);
export default IconlystFridgeLight;
