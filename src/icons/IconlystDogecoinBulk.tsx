import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogecoinBulk = ({
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
      fill="#020202"
      fillRule="evenodd"
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.238 22 12s-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill="#020202"
      fillRule="evenodd"
      d="M12.92 16.026h-2.547a.71.71 0 0 1-.709-.709V12.71h-.483a.709.709 0 0 1 0-1.417h.483V8.685c0-.391.318-.708.709-.708h2.548A4.03 4.03 0 0 1 16.945 12a4.03 4.03 0 0 1-4.024 4.025m-1.839-6.632h1.84A2.61 2.61 0 0 1 15.528 12a2.61 2.61 0 0 1-2.607 2.608h-1.84v-1.9h1.63a.709.709 0 0 0 0-1.416h-1.63z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDogecoinBulk;
