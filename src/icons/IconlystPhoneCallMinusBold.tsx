import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallMinusBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.219 14.682a41 41 0 0 1-.8-.774c-1.298-1.3-2.376-.88-3.326-.507-1.087.426-2.112.828-3.982-1.043-1.87-1.866-1.47-2.893-1.044-3.979.372-.95.793-2.029-.506-3.33a41 41 0 0 1-.778-.805C8.827 3.238 8.136 2.51 7.166 2.498h-.024c-.833 0-1.71.536-3.011 1.839-.013.014-.081.082-.093.097-.291.285-1.063 1.043-1.07 2.518-.012 2.306 1.85 5.341 5.53 9.023 3.67 3.669 6.698 5.529 9 5.528h.03c1.477-.01 2.23-.786 2.514-1.078l.093-.09c1.312-1.313 1.843-2.191 1.833-3.032-.013-.971-.741-1.663-1.75-2.621M16.493 7.391h4.789a.75.75 0 0 0 0-1.5h-4.79a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallMinusBold;
