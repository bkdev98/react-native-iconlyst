import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinexBulk = ({
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
      d="M5.343 5.596A9.96 9.96 0 0 0 3.017 12c0 5.514 4.486 10 10 10a9.96 9.96 0 0 0 8.833-5.324 1 1 0 0 0-.178-1.174l-6.194-6.19a3.8 3.8 0 0 0-5.367.01 3.76 3.76 0 0 0-1.113 2.678 3.76 3.76 0 0 0 1.112 2.677c1.43 1.431 3.928 1.431 5.36 0a.999.999 0 1 0-1.414-1.414c-.676.676-1.855.677-2.533-.001a1.776 1.776 0 0 1 .002-2.526 1.8 1.8 0 0 1 2.54-.009l5.647 5.645a7.96 7.96 0 0 1-6.695 3.628c-4.41 0-8-3.589-8-8 0-1.883.654-3.616 1.747-4.985z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill="#0B0B0B"
      d="M10.819 4.307A8 8 0 0 1 13.017 4a7.95 7.95 0 0 1 6.717 3.656l-1.942 1.948a1 1 0 1 0 1.416 1.412l2.483-2.49c.307-.309.38-.781.179-1.168A9.94 9.94 0 0 0 13.017 2a9.95 9.95 0 0 0-3.779.741 10.05 10.05 0 0 0-3.895 2.855l1.421 1.42a8.03 8.03 0 0 1 4.055-2.709"
    />
  </Svg>
);
export default IconlystCoinexBulk;
