import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClap2Light = ({
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
      d="M6.176 8.19c0-.864-.732-1.588-1.587-1.588-.863 0-1.588.732-1.588 1.587L3 14.714a6.348 6.348 0 0 0 12.695 0l.002-3.338c0-.637-.515-1.153-1.152-1.153a2.016 2.016 0 0 0-2.015 2.016v.07"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.525 14.541.002-7.41a1.588 1.588 0 0 0-3.175 0M9.35 12.424V5.725a1.588 1.588 0 1 0-3.176 0v6.698M21 7l-1.367.246M18.79 4.145l-.747 1.062M15.515 10.61a2.016 2.016 0 0 1 1.955-1.524c.637 0 1.152.516 1.152 1.152l-.002 3.339a6.35 6.35 0 0 1-5.576 6.24"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.1 4.587a1.588 1.588 0 0 1 3.175.001l.003 1.407"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.277 5.994a1.588 1.588 0 0 1 3.176 0l.062 4.615"
    />
  </Svg>
);
export default IconlystClap2Light;
