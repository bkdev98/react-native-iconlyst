import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumberedListOutline = ({
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
      d="M8.901 21.266h-3.69a.75.75 0 0 1-.443-1.356c.02-.014 1.983-1.447 2.682-2.075a1.84 1.84 0 0 0 .7-1.32 1.25 1.25 0 0 0-2.5 0 .75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 5.5 0 3.32 3.32 0 0 1-1.2 2.436c-.242.217-.609.512-1 .815h1.451a.75.75 0 1 1 0 1.5M6.9 11.265a.75.75 0 0 1-.75-.75V6.083l-.628.505a.75.75 0 1 1-.94-1.168l1.846-1.488a.75.75 0 0 1 1.221.584v6a.75.75 0 0 1-.75.749M20.9 19.266h-8.666a.75.75 0 0 1 0-1.5H20.9a.75.75 0 1 1 0 1.5m0-6h-8.666a.75.75 0 0 1 0-1.5H20.9a.75.75 0 1 1 0 1.5m0-6h-8.666a.75.75 0 0 1 0-1.5H20.9a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystNumberedListOutline;
