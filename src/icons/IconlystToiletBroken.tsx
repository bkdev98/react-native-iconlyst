import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToiletBroken = ({
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
      d="M9.743 3c-.898 0-1.625.728-1.625 1.625v3.364c0 .874.708 1.582 1.582 1.582h7.05c.874 0 1.583-.708 1.583-1.582V4.625c0-.897-.727-1.625-1.625-1.625h-3.483M15.659 5.484h-1.155M8.686 21h8.604M6.64 12.635h12.695M8.242 12.635v1.803c0 1.35.826 2.538 2.082 3.245v1.015M17.75 12.635v1.803c0 1.35-.826 2.538-2.082 3.243v3.32M10.316 12.634V9.57m5.342 0v3.064"
    />
  </Svg>
);
export default IconlystToiletBroken;
