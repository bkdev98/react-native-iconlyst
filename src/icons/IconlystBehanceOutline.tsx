import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBehanceOutline = ({
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
      d="M2.25 7.023A1.297 1.297 0 0 1 3.548 5.73h4.289a3.485 3.485 0 0 1 2.159 6.22 3.484 3.484 0 0 1-2.16 6.221H3.549a1.3 1.3 0 0 1-1.298-1.293V7.023M7.836 11.2a1.985 1.985 0 1 0 0-3.97H3.75v3.979a1 1 0 0 1 .111-.009zM3.75 12.692v3.98h4.087a1.984 1.984 0 1 0 0-3.972H3.86a1 1 0 0 1-.111-.008M14.645 6.516a.75.75 0 0 1 .75-.75h4.104a.75.75 0 0 1 0 1.5h-4.104a.75.75 0 0 1-.75-.75M14.662 12.876h5.565a2.804 2.804 0 0 0-5.565 0m.031 1.5a2.95 2.95 0 0 0 4.972 1.537.75.75 0 0 1 1.055 1.066 4.449 4.449 0 0 1-7.58-3.157v-.597a4.304 4.304 0 0 1 8.609 0v.06a1.09 1.09 0 0 1-1.09 1.091z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBehanceOutline;
