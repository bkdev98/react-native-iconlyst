import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryLocationTwoTone = ({
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
      d="m20.496 9.731-.017-1.597c-.007-2.803-1.758-4.779-4.563-4.772l-8.027.018c-2.797.007-4.546 1.992-4.54 4.795l.018 7.562c.007 2.803 1.757 4.779 4.563 4.772l3.774-.018"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.913 20.639c-.55 0-3.438-2.338-3.438-4.785a3.437 3.437 0 1 1 6.875 0c0 2.447-2.888 4.785-3.437 4.785"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.617 3.362.016 6.353-2.698-.878-2.714.894-.008-6.345M17.943 15.775v.064m.26-.05a.262.262 0 1 1-.524 0 .262.262 0 0 1 .524 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryLocationTwoTone;
