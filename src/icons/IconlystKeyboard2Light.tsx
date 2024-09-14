import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard2Light = ({
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
      d="M7.762 20.25h8.467c2.937 0 4.771-1.644 4.771-4.663V8.498c0-3.067-1.834-4.748-4.771-4.748H7.77C4.824 3.75 3 5.402 3 8.422v7.165c-.01 3.02 1.816 4.663 4.762 4.663"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.673 16.143H9.328M13.656 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M10.334 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M7.012 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M16.98 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M11.996 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M8.672 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M15.318 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboard2Light;
