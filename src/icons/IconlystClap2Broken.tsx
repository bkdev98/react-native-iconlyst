import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClap2Broken = ({
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
      d="M9.349 21a6.35 6.35 0 0 0 6.347-6.286l.002-3.338c0-.637-.515-1.153-1.152-1.153a2.016 2.016 0 0 0-2.015 2.016v.069M3.45 16.996a6.35 6.35 0 0 0 3.27 3.433M6.176 8.19a1.61 1.61 0 0 0-1.587-1.588 1.61 1.61 0 0 0-1.588 1.587L3 14.714"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.526 14.541.002-7.41c0-.421-.168-.825-.465-1.123a1.59 1.59 0 0 0-2.245 0 1.58 1.58 0 0 0-.465 1.122M9.35 12.424v-6.7a1.59 1.59 0 0 0-3.175 0v6.699M21 7.002l-1.366.246M18.789 4.145l-.746 1.062M17.93 16.398a6.344 6.344 0 0 1-4.885 3.419M15.516 10.61a2.02 2.02 0 0 1 1.956-1.524c.636 0 1.152.517 1.15 1.153v3.338"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.1 4.587a1.58 1.58 0 0 1 .466-1.122A1.58 1.58 0 0 1 10.689 3a1.59 1.59 0 0 1 1.587 1.588l.003 1.407"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.277 5.994a1.587 1.587 0 1 1 3.176.001l.062 1.48"
    />
  </Svg>
);
export default IconlystClap2Broken;
