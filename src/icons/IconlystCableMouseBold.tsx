import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableMouseBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.28 11.334 14 12.624c-.15.14-.34.21-.53.21a.74.74 0 0 1-.53-.21c-.3-.3-.3-.77 0-1.07l1.28-1.28c.3-.3.77-.3 1.06 0 .3.29.3.77 0 1.06m3.3-3.3.05-.05c.9-.91.89-2.41-.03-3.34l-.58-.57a.3.3 0 0 1-.01-.42c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0c-.7.7-.69 1.83.01 2.54l.58.57c.34.35.35.9.02 1.23l-.04.04c-2.55-2.04-6.18-1.99-8.42.25l-3.43 3.44c-2.41 2.4-2.29 6.43.25 8.97a6.73 6.73 0 0 0 4.53 1.99h.2c1.62 0 3.12-.61 4.25-1.74l3.43-3.44c2.24-2.23 2.29-5.86.25-8.41"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCableMouseBold;
