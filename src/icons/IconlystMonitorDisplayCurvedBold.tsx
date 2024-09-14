import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurvedBold = ({
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
      d="M21.329 3.09a.51.51 0 0 0-.396-.12 65.8 65.8 0 0 1-17.866 0 .499.499 0 0 0-.567.496v12.618a.502.502 0 0 0 .567.494 65.9 65.9 0 0 1 17.866 0 .5.5 0 0 0 .396-.117.5.5 0 0 0 .171-.377V3.466a.5.5 0 0 0-.171-.377M17.299 19.312c-3.501-.919-7.102-.92-10.707 0a.87.87 0 0 0-.535.4.86.86 0 0 0-.096.662.87.87 0 0 0 .846.66 1 1 0 0 0 .219-.028c3.312-.844 6.62-.845 9.829 0a.877.877 0 0 0 1.068-.624.876.876 0 0 0-.624-1.07"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurvedBold;
