import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRainyTwoTone = ({
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
      d="M3.282 12.35a4.118 4.118 0 0 1 5.636-3.828 6.194 6.194 0 1 1 10.196 6.255"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.995 19.92h3.569c1.376 0 2.49-1.166 2.49-2.602 0-1.437-1.114-2.602-2.49-2.602-.325 0-.634.065-.919.182-.457-1.622-1.894-2.806-3.595-2.806-1.335 0-2.507.73-3.171 1.827"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.754 15.464-.673 2.166H9.06l-.667 2.267m4.228-3.2-.402 1.598m-8.851-3.312-.314 1.2m1.536 2.112-.477 1.601"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudRainyTwoTone;
