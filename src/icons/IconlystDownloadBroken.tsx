import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.999 15.285v1.656a3.31 3.31 0 0 1-3.31 3.31h-3.891M4 15.285v1.656a3.31 3.31 0 0 0 3.31 3.31h2.345M11.979 14.736l-3.566-3.588M15.586 11.148 14.13 12.97M12 4.523V14.73"
    />
  </Svg>
);
export default IconlystDownloadBroken;
