import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystController1Outline = ({
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
      d="M2.504 11.824a5.63 5.63 0 0 1 5.632-5.632h8.227c3.11 0 5.632 2.521 5.632 5.632v4.294a5.633 5.633 0 0 1-5.632 5.632H8.136a5.63 5.63 0 0 1-5.632-5.632zm5.632-4.132a4.13 4.13 0 0 0-4.132 4.132v4.294a4.13 4.13 0 0 0 4.132 4.132h8.227a4.133 4.133 0 0 0 4.132-4.132v-4.294a4.13 4.13 0 0 0-4.132-4.132z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.063 15.598a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M14.43 12.382a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M9.412 11.53a.75.75 0 0 1 .75.75v.934h.97a.75.75 0 0 1 0 1.5h-.97v.934a.75.75 0 0 1-1.5 0v-.934h-.967a.75.75 0 0 1 0-1.5h.967v-.935a.75.75 0 0 1 .75-.75M8.715 2.25a.75.75 0 0 1 .75.75c0 .238.201.456.48.456h.954c1.447.005 2.643 1.158 2.65 2.61v.741a.75.75 0 0 1-1.5 0v-.735c-.004-.602-.505-1.113-1.154-1.116h-.95c-1.078 0-1.98-.861-1.98-1.956a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystController1Outline;
