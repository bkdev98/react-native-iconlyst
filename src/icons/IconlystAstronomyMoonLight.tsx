import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAstronomyMoonLight = ({
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
      d="M15.621 15.161c-.406 4.094-4.752 7.01-9.144 4.977a5.6 5.6 0 0 1-2.828-2.962c-1.815-4.457 1.247-8.645 5.34-8.902-.423 1.748.022 3.806 1.274 5.107s3.45 2.172 5.358 1.78M21.114 10.26a4.37 4.37 0 0 0-2.809 2.809 4.37 4.37 0 0 0-2.808-2.809 4.37 4.37 0 0 0 2.808-2.809 4.37 4.37 0 0 0 2.81 2.81M14.948 5.2a3.11 3.11 0 0 0-2 2 3.11 3.11 0 0 0-2.001-2 3.11 3.11 0 0 0 2-2 3.11 3.11 0 0 0 2.001 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAstronomyMoonLight;
