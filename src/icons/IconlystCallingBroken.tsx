import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallingBroken = ({
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
      d="M14.353 2.5a7.97 7.97 0 0 1 7.04 7.032M14.353 6.043a4.43 4.43 0 0 1 3.5 3.5M11.032 12.472c-3.99-3.988.622-4.895-1.917-7.435-2.448-2.448-2.931-3.863-6.041-.753-.218.272-2.12 1.562-.277 5.28M13 13.92c2.422 1.048 3.407-1.592 5.465.465 2.449 2.448 3.857 2.938.754 6.04-.389.312-2.858 4.07-11.534-4.605-1.508-1.508-2.64-2.828-3.48-3.982"
    />
  </Svg>
);
export default IconlystCallingBroken;
