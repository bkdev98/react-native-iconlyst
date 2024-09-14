import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryLocationBroken = ({
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
      d="m20.996 9.731-.017-1.597c-.007-2.803-1.758-4.779-4.563-4.772l-8.027.018c-2.797.007-4.546 1.992-4.54 4.795l.01 3.781M3.867 15.737c.007 2.803 1.757 4.779 4.563 4.772l3.774-.018"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.413 20.639c-.55 0-3.438-2.338-3.438-4.785a3.437 3.437 0 1 1 6.875 0c0 2.447-2.888 4.785-3.437 4.785"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.117 6.362.016 3.353-2.698-.879-2.714.895-.008-6.345M18.443 15.775v.064m.26-.05a.262.262 0 1 1-.524 0 .262.262 0 0 1 .524 0"
    />
  </Svg>
);
export default IconlystDeliveryLocationBroken;
