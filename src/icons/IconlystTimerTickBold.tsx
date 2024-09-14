import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerTickBold = ({
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
      d="m15.741 11.445-3.72 3.72c-.15.14-.34.22-.53.22a.75.75 0 0 1-.53-.22l-1.81-1.81a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.28 1.28 3.19-3.19c.29-.29.77-.29 1.06 0s.29.77 0 1.06m-3.75-6.39c-4.4 0-7.98 3.58-7.98 7.98s3.58 7.98 7.98 7.98c4.41 0 7.99-3.58 7.99-7.98s-3.58-7.98-7.99-7.98M6.634 4.385a.75.75 0 1 0-.78-1.281A11.5 11.5 0 0 0 2.382 6.4a.75.75 0 1 0 1.236.849 10 10 0 0 1 3.016-2.864M21.618 6.4a11.5 11.5 0 0 0-3.484-3.307.75.75 0 0 0-.776 1.284 10 10 0 0 1 3.024 2.873.747.747 0 0 0 1.043.193.75.75 0 0 0 .193-1.043"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerTickBold;
