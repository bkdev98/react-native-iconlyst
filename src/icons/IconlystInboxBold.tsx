import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.755 9.605h6.49a.75.75 0 0 1 0 1.5h-6.49a.75.75 0 0 1 0-1.5m1.919-3.33h2.652a.75.75 0 0 1 0 1.5h-2.652a.75.75 0 0 1 0-1.5m-3.386 6.907c1.182 0 2.24.659 2.764 1.719a2.16 2.16 0 0 0 1.946 1.212c.832 0 1.577-.465 1.946-1.212a3.07 3.07 0 0 1 2.764-1.72H21.3a.2.2 0 0 0 .2-.2V8.19c0-3.315-2.123-5.543-5.283-5.543H7.782C4.623 2.647 2.5 4.875 2.5 8.19v4.792c0 .11.09.2.2.2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.708 14.682c-.606 0-1.149.338-1.418.882a3.65 3.65 0 0 1-3.292 2.049 3.65 3.65 0 0 1-3.29-2.048 1.57 1.57 0 0 0-1.42-.883H2.7a.2.2 0 0 0-.2.2v1.282c0 3.316 2.123 5.544 5.282 5.544h8.434c3.16 0 5.284-2.228 5.284-5.544v-1.282a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInboxBold;
