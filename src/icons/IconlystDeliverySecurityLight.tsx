import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySecurityLight = ({
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
      d="m21.726 10.364-.018-2.327c-.007-2.923-1.831-4.983-4.757-4.976l-8.369.02c-2.916.006-4.74 2.075-4.732 4.998l.018 7.884c.007 2.923 1.831 4.982 4.757 4.976l3.934-.02"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.597 3.061.016 6.624-2.813-.917-2.83.934-.007-6.617"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.6 20.797s3.224-.976 3.224-3.667c0-2.692.116-2.605-.142-2.866-.26-.26-2.66-1.096-3.082-1.096s-2.824.837-3.083 1.096c-.258.259-.14.174-.14 2.866 0 2.691 3.223 3.667 3.223 3.667"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliverySecurityLight;
