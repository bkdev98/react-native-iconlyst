import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxCheckBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.589 12.576c1.182 0 2.24.659 2.764 1.72a2.16 2.16 0 0 0 1.946 1.212c.83 0 1.577-.465 1.947-1.213a3.07 3.07 0 0 1 2.763-1.72H21.6a.2.2 0 0 0 .2-.2V8.19c0-3.316-2.123-5.543-5.283-5.543H8.083C4.923 2.646 2.8 4.873 2.8 8.19v4.187c0 .11.09.2.2.2z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.329 8.31a.75.75 0 0 1 1.06.002l1.066 1.071 2.758-2.768a.749.749 0 1 1 1.062 1.058l-3.29 3.302a.75.75 0 0 1-1.061 0L9.327 9.37a.75.75 0 0 1 .002-1.06M17.009 14.076c-.605 0-1.148.339-1.42.884a3.65 3.65 0 0 1-3.29 2.048 3.65 3.65 0 0 1-3.291-2.048 1.57 1.57 0 0 0-1.42-.884H3.002a.2.2 0 0 0-.2.2v1.888c0 3.316 2.123 5.544 5.282 5.544h8.434c3.16 0 5.284-2.228 5.284-5.544v-1.888a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInboxCheckBulk;
