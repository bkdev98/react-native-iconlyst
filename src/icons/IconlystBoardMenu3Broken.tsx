import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardMenu3Broken = ({
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
      d="M16.216 21C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.217 3H7.782C4.842 3 3 5.081 3 8.026v7.948C3 18.919 4.834 21 7.782 21h4.593M7.578 12h.305m-.305-3.96h.305m-.305 7.919h.305M11.139 12h3.592m-3.592-3.96h5.283m-5.283 7.919h5.283"
    />
  </Svg>
);
export default IconlystBoardMenu3Broken;
