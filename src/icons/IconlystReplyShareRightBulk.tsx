import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareRightBulk = ({
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
      d="M16.218 2.75H7.783C4.623 2.75 2.5 4.973 2.5 8.28v7.94c0 3.307 2.124 5.53 5.284 5.53h8.434c3.16 0 5.282-2.223 5.282-5.53V8.28c0-3.307-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.817 7.316a.75.75 0 0 0-.636.636c-.018.127-.423 3.132 1.363 5.192.916 1.056 2.214 1.657 3.866 1.794v.982c.001.492.281.93.731 1.138.453.211.97.144 1.354-.178l3.922-3.328a1.259 1.259 0 0 0 .034-1.9l-3.93-3.55a1.25 1.25 0 0 0-1.36-.217 1.26 1.26 0 0 0-.752 1.153v1.308c-1.862-.17-3.08-1.008-3.803-2.598a.75.75 0 0 0-.789-.432m6.092 6.902a.75.75 0 0 0-.75-.749c-1.554 0-2.724-.437-3.476-1.3-.43-.493-.689-1.08-.842-1.65 1.091.904 2.535 1.36 4.318 1.36a.75.75 0 0 0 .75-.75V9.571l3.333 3.011-3.333 2.828z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareRightBulk;
