import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudWindyTwoTone = ({
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
      d="M11.874 5.631c-3.518 0-4.764 3.177-4.764 4.765-2.207.02-3.99 1.502-3.99 4.027 0 1.042.395 1.992 1.044 2.707"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.834 6.064h3.025M17.21 3h3.42M3.934 20.858h5.439M19.26 21h1.73M6.653 17.13h3.42M5.175 3h2.077"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.4 18.425h4.235a4.5 4.5 0 0 0 1.628-.326 4.03 4.03 0 0 0 2.366-3.676c0-2.525-1.783-4.007-3.99-4.027 0-.47-.109-1.077-.352-1.7"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudWindyTwoTone;
