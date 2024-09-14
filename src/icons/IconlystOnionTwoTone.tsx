import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnionTwoTone = ({
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
      d="M12 18.51c-4.338 0-7.855-2.814-7.855-6.284.002-3.659 4.096-5.81 6.438-7.402C11.708 4.058 11.966 3 11.966 3c1.778 3.209 7.887 4.798 7.889 9.226 0 3.47-3.517 6.284-7.855 6.284"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21v-2.43M12.982 18.51l1.882 1.883M11.018 18.51l-1.881 1.883"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.163 12.085C15.162 6.864 12 5.57 12 3c0 2.57-3.162 3.865-3.163 9.086 0 3.345 1.416 6.057 3.163 6.057s3.162-2.711 3.162-6.057"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystOnionTwoTone;
