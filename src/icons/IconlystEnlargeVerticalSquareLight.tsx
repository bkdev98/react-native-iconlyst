import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeVerticalSquareLight = ({
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
      d="M7.782 21h8.435C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.216 3H7.782C4.834 3 3 5.081 3 8.026v7.948C3 18.919 4.843 21 7.782 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.854 17.292 2.145-2.145 2.145 2.145M9.854 6.71l2.145 2.146 2.145-2.145M16.762 12H7.238"
    />
  </Svg>
);
export default IconlystEnlargeVerticalSquareLight;