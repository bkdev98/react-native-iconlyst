import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceBroken = ({
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
      d="M21.5 12.85V7.783C21.5 4.843 19.418 3 16.473 3H8.526C5.581 3 3.5 4.835 3.5 7.783v8.433C3.5 19.167 5.581 21 8.526 21h7.947c2.945 0 5.027-1.834 5.027-4.782v-.507M12.5 5.897V21M9.229 14.918H3.5m18-4.787h-9"
    />
  </Svg>
);
export default IconlystGridInterfaceBroken;
