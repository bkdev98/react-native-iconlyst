import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleMapsTwoTone = ({
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
      strokeWidth={1.5}
      d="M12.031 12.072a2.509 2.509 0 1 0 0-5.017 2.509 2.509 0 0 0 0 5.017Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.201 16.996 8.524-10.418M6.128 12.654l7.86-9.334M6.944 5.473l3.066 2.555"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.01 21c-.33 0-.485-.141-.655-.615-.448-1.576-1.286-2.277-2.301-3.557-.92-1.228-2.277-2.628-2.982-4.22C4.112 8.275 7.15 2.992 11.993 3c4.978-.014 7.972 5.46 5.845 9.839a19.8 19.8 0 0 1-2.183 3.11c-1.288 1.523-2.447 2.509-2.996 4.438-.127.373-.29.613-.65.613"
    />
  </Svg>
);
export default IconlystGoogleMapsTwoTone;
