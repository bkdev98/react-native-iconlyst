import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneNumberPadOutline = ({
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
      d="M3.749 5.47a2.22 2.22 0 1 1 4.44 0 2.22 2.22 0 0 1-4.44 0m2.22-.72a.72.72 0 1 0 0 1.44.72.72 0 0 0 0-1.44m4.06.72a2.22 2.22 0 1 1 4.44 0 2.22 2.22 0 0 1-4.44 0m2.22-.72a.72.72 0 1 0 0 1.44.72.72 0 0 0 0-1.44m4.061.72a2.22 2.22 0 1 1 4.441 0 2.22 2.22 0 0 1-4.44 0m2.22-.72a.72.72 0 1 0 0 1.44.72.72 0 0 0 0-1.44M3.75 12a2.22 2.22 0 1 1 4.44-.001 2.22 2.22 0 0 1-4.44 0m2.22-.72a.72.72 0 1 0 0 1.439.72.72 0 0 0 0-1.44m4.06.72a2.22 2.22 0 1 1 4.44-.001 2.22 2.22 0 0 1-4.44 0m2.22-.72a.72.72 0 1 0 0 1.439.72.72 0 0 0 0-1.44m4.061.72a2.22 2.22 0 1 1 4.441 0 2.22 2.22 0 0 1-4.44 0m2.22-.72a.72.72 0 1 0 0 1.44.72.72 0 0 0 0-1.44m-8.5 7.25a2.22 2.22 0 1 1 4.44 0 2.22 2.22 0 0 1-4.44 0m2.22-.72a.72.72 0 1 0-.001 1.44.72.72 0 0 0 0-1.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneNumberPadOutline;
