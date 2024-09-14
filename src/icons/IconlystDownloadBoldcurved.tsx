import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadBoldcurved = ({
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
      d="M12.88 2.82c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.89c.5-.02 1-.02 1.5-.01z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.67 6.83h-.02c-1.25-.08-2.5-.12-3.77-.13v6.35l1.64-1.65c.29-.29.77-.29 1.06 0 .29.3.29.77 0 1.06l-2.92 2.93a.78.78 0 0 1-.53.22.776.776 0 0 1-.53-.22l-2.92-2.93a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.64 1.65V6.71c-1.19 0-2.37.05-3.55.12-4.03.37-5.33 2.2-5.33 7.5 0 7.6 2.85 7.6 9.75 7.6s9.75 0 9.75-7.6c0-5.3-1.3-7.13-5.33-7.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownloadBoldcurved;
