import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonRainyTwoTone = ({
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
      d="M18.414 15.609c0-2.17-1.533-3.445-3.43-3.462 0-1.365-1.071-4.095-4.095-4.095-1.499 0-2.518.671-3.164 1.514l-.322.463"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.362 16.593a2.12 2.12 0 0 1-1.248-1.933c0-1.33.94-2.11 2.102-2.12 0-.837.656-2.51 2.508-2.51 1.853 0 2.51 1.673 2.51 2.51M9.327 8.167a2.257 2.257 0 0 0-4.504-.218M3.114 9.07a1.184 1.184 0 0 1 2.295-.41"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.933 19.548.3-1.066m7.38 1.066.3-1.066m-1.187-1.877.457-1.423m-4.403 0-.606 1.785h2.275l-.814 2.137M12.424 8.206a4.364 4.364 0 0 1 3.983-3.921c-1.291 3.49 1.294 6.047 4.707 4.702a4.365 4.365 0 0 1-3.804 3.975"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMoonRainyTwoTone;
