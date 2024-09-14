import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelecabinLight = ({
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
      d="M16.332 20.998H8.16a3.4 3.4 0 0 1-3.328-2.273 3.4 3.4 0 0 1-.182-1.415v-5.837a3.397 3.397 0 0 1 3.51-3.687h8.173a3.396 3.396 0 0 1 3.519 3.687v5.837a3.4 3.4 0 0 1-2.112 3.44 3.4 3.4 0 0 1-1.407.248M14.025 17.789h-3.548"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.648 15.04H8.845a1.126 1.126 0 0 1-1.164-1.221v-1.933a1.128 1.128 0 0 1 1.164-1.22h6.803a1.125 1.125 0 0 1 1.163 1.22v1.933a1.12 1.12 0 0 1-1.163 1.22M6.357 4.286 18.143 3M12.25 3.638v4.148"
    />
  </Svg>
);
export default IconlystTelecabinLight;
