import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiChatLight = ({
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
      d="M8.492 4.537h7.022c2.443 0 3.956 1.326 3.95 3.763v7.395c0 2.436-1.515 3.77-3.958 3.77H8.492c-2.436 0-3.956-1.357-3.956-3.832V8.3c0-2.437 1.52-3.763 3.956-3.763M16.049 4.537V3m-4.05 1.537V3m-4.05 1.537V3M7.95 19.463V21m4.049-1.537V21m4.05-1.537V21M4.537 7.95H3m1.537 4.049H3m1.537 4.05H3M19.463 16.049H21m-1.537-4.05H21m-1.537-4.05H21"
    />
    <Path
      stroke={props.color}
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.3 8.334H14.7c.745 0 1.35.604 1.35 1.35v5.53a.45.45 0 0 1-.702.373l-1.318-.89a.74.74 0 0 0-.416-.128H9.3a1.35 1.35 0 0 1-1.35-1.35V9.684c0-.746.605-1.35 1.35-1.35Z"
    />
  </Svg>
);
export default IconlystAiChatLight;
