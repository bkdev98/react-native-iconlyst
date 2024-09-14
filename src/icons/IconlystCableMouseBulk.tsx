import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableMouseBulk = ({
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
      d="m18.58 8.033.05-.05c.9-.91.89-2.41-.03-3.34l-.58-.57a.3.3 0 0 1-.01-.42c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0c-.7.7-.69 1.83.01 2.54l.58.57c.34.35.35.9.02 1.23l-.04.04c-2.55-2.04-6.18-1.99-8.42.25l-3.43 3.44c-2.41 2.4-2.29 6.43.25 8.97a6.73 6.73 0 0 0 4.53 1.99h.2c1.62 0 3.12-.61 4.25-1.74l3.43-3.44c2.24-2.23 2.29-5.86.25-8.41"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m14 12.623 1.28-1.29c.3-.29.3-.77 0-1.06-.29-.3-.76-.3-1.06 0l-1.28 1.28c-.3.3-.3.77 0 1.07.14.14.33.21.53.21.19 0 .38-.07.53-.21"
    />
  </Svg>
);
export default IconlystCableMouseBulk;
