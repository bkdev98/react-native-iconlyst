import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInboxBulk = ({
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
      d="M7.59 11.875c1.182 0 2.24.659 2.765 1.719a2.16 2.16 0 0 0 1.946 1.213c.83 0 1.577-.465 1.946-1.213a3.07 3.07 0 0 1 2.764-1.72h4.59a.2.2 0 0 0 .2-.2V8.19c0-3.315-2.123-5.543-5.282-5.543H8.084C4.924 2.647 2.8 4.875 2.8 8.19v3.485c0 .11.09.2.2.2z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.01 13.375c-.604 0-1.147.338-1.418.884a3.65 3.65 0 0 1-3.291 2.048 3.65 3.65 0 0 1-3.292-2.05 1.57 1.57 0 0 0-1.418-.882H3a.2.2 0 0 0-.2.2v2.589c0 3.316 2.123 5.544 5.283 5.544h8.434c3.16 0 5.283-2.228 5.283-5.544v-2.59a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystInboxBulk;
