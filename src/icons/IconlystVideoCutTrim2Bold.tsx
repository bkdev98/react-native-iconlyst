import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrim2Bold = ({
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
      d="M16.562 9.15h-2.191a.75.75 0 0 1 0-1.5h2.191a.75.75 0 0 1 0 1.5m0 7.2h-2.191a.75.75 0 0 1 0-1.5h2.191a.75.75 0 0 1 0 1.5m-5.267-7.2H9.104a.75.75 0 0 1 0-1.5h2.191a.75.75 0 0 1 0 1.5m0 7.2H9.104a.75.75 0 0 1 0-1.5h2.191a.75.75 0 0 1 0 1.5m8.343 0a.75.75 0 0 1 0-1.5h2.396a.3.3 0 0 0 .3-.3v-5.1a.3.3 0 0 0-.3-.3h-2.396a.75.75 0 0 1 0-1.5h2.346c.173 0 .31-.146.291-.317-.292-2.637-2.301-4.372-5.21-4.372H8.603c-2.909 0-4.918 1.735-5.211 4.372a.29.29 0 0 0 .29.317H6.03a.75.75 0 0 1 0 1.5H3.634a.3.3 0 0 0-.3.3v5.1a.3.3 0 0 0 .3.3h2.395a.75.75 0 0 1 0 1.5H3.683a.29.29 0 0 0-.291.317c.293 2.638 2.302 4.374 5.211 4.374h8.462c2.909 0 4.918-1.736 5.211-4.374a.29.29 0 0 0-.29-.317z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoCutTrim2Bold;
