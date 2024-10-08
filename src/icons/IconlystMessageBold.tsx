import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.94 3A5.057 5.057 0 0 1 22 8.05v7.9c0 2.79-2.27 5.05-5.06 5.05H7.06A5.057 5.057 0 0 1 2 15.95v-7.9A5.05 5.05 0 0 1 7.06 3Zm1.13 5.2a.76.76 0 0 0-.56.2L13 12a1.566 1.566 0 0 1-2 0L6.5 8.4a.76.76 0 0 0-1 .07c-.27.27-.3.7-.07 1l.13.13 4.55 3.55a3.14 3.14 0 0 0 3.91 0l4.51-3.61.08-.08a.77.77 0 0 0-.01-1 .84.84 0 0 0-.53-.26"
    />
  </Svg>
);
export default IconlystMessageBold;
