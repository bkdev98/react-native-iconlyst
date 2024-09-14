import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditSquareOutline = ({
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
      fillRule="evenodd"
      d="M11.492 2.037a.75.75 0 0 1 0 1.5H7.753C5.17 3.537 3.5 5.307 3.5 8.046v8.314c0 2.739 1.67 4.509 4.253 4.509h8.824c2.584 0 4.254-1.77 4.254-4.51v-4.027a.75.75 0 0 1 1.5 0v4.028c0 3.594-2.313 6.009-5.754 6.009H7.753c-3.44 0-5.753-2.415-5.753-6.01V8.047c0-3.594 2.312-6.01 5.753-6.01zm8.71.878 1.217 1.217c.593.592.919 1.38.918 2.217 0 .838-.326 1.624-.918 2.215l-7.51 7.51a2.9 2.9 0 0 1-2.064.854H8.099a.75.75 0 0 1-.75-.769l.094-3.779a2.9 2.9 0 0 1 .854-1.992l7.474-7.473a3.14 3.14 0 0 1 4.43 0m-5.047 2.736L9.358 11.45a1.41 1.41 0 0 0-.415.968l-.075 3.011h2.977c.38 0 .736-.147 1.005-.416l5.832-5.834zm1.676-1.675-.616.614 3.527 3.528.617-.615c.308-.308.478-.718.478-1.154 0-.437-.17-.848-.478-1.156l-1.217-1.217a1.64 1.64 0 0 0-2.311 0"
    />
  </Svg>
);
export default IconlystEditSquareOutline;
