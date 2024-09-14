import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryCloudLight = ({
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
      d="m21.34 11.407-.02-3.518c-.006-2.858-1.791-4.874-4.652-4.867l-8.187.02c-2.854.006-4.638 2.03-4.631 4.89l.018 7.712c.007 2.86 1.792 4.876 4.653 4.869"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.227 16.45c-1.245.012-2.25.848-2.25 2.271a2.27 2.27 0 0 0 1.335 2.07c.332.135.662.187.913.187h5.372c.251 0 .582-.049.918-.183a2.28 2.28 0 0 0 1.334-2.074c0-1.423-1.006-2.26-2.25-2.27 0-.895-.702-2.686-2.686-2.686s-2.686 1.79-2.686 2.686"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.343 3.022.016 6.48-2.752-.897-2.768.913-.009-6.472"
    />
  </Svg>
);
export default IconlystDeliveryCloudLight;
