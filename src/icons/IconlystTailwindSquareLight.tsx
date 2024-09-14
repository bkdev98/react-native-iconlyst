import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTailwindSquareLight = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.514 8.063c1.39.828 2.503 1.946 4.185.697-.268 2.032-2.885 3.17-4.864 1.888-1.455-.881-2.107-1.694-4.167-.713.298-2.237 2.956-3.097 4.846-1.872M11.148 13.368c1.39.827 2.503 1.946 4.185.696-.268 2.032-2.885 3.17-4.864 1.888-1.455-.88-2.107-1.694-4.167-.712.297-2.238 2.956-3.097 4.846-1.872"
    />
  </Svg>
);
export default IconlystTailwindSquareLight;
