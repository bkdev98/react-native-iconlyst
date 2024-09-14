import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard2TwoTone = ({
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
      d="M8.262 20.25h8.467c2.937 0 4.771-1.644 4.771-4.663V8.498c0-3.067-1.834-4.748-4.771-4.748H8.27C5.324 3.75 3.5 5.402 3.5 8.422v7.165c-.01 3.02 1.816 4.663 4.762 4.663"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.173 16.143H9.828M14.156 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M10.834 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M7.512 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M17.48 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M12.496 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M9.172 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M15.818 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboard2TwoTone;
