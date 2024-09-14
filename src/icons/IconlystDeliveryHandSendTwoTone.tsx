import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryHandSendTwoTone = ({
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
      d="M10.879 16.382c.82-.12 1.657.002 2.486-.018 1.923-.046 3.43-1.672 4.894-2.774a1.875 1.875 0 0 1 2.456.175 1.893 1.893 0 0 1 0 2.669c-1.58 1.588-2.978 3.06-5.12 3.892-2.974 1.157-5.733.597-8.744 0-1.166-.23-2.24-.244-3.418-.244"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.879 16.346h1.624c1.158 0 2.095-.833 2.095-1.993 0-.963-.653-1.734-1.587-1.968-1.336-.336-2.67-.599-4.066-.565-2.211.054-3.758 1.286-5.511 2.459"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.903 13.212-.015-6.518c-.005-2.378-1.162-3.7-3.54-3.694l-7.51.017C6.468 3.02 5.357 4.35 5.362 6.728l.016 6.266"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.636 3 .011 5.417-2.007-.655-2.019.666-.006-5.41"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryHandSendTwoTone;
