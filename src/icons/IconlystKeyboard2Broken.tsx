import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard2Broken = ({
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
      d="M12.279 20.25H8.27c-2.947 0-4.771-1.652-4.771-4.673V8.412C3.49 5.393 5.316 3.75 8.262 3.75h8.467c2.937 0 4.771 1.643 4.771 4.662v7.09c0 3.066-1.834 4.748-4.771 4.748H15.63M15.173 16.143H9.828"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.156 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M10.834 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M7.512 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M17.48 8.617v-.022m0-.115a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M12.496 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M9.172 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226M15.818 12.005v-.022m0-.114a.113.113 0 1 0 0 .226.113.113 0 0 0 0-.226"
    />
  </Svg>
);
export default IconlystKeyboard2Broken;
