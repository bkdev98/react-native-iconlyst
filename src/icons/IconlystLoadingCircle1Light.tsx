import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoadingCircle1Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.776 6.631A9 9 0 0 1 6.228 5.08M3.327 9.546a9 9 0 0 0-.299 3.034M6.852 19.361a9 9 0 0 1-3.12-3.782M17.563 19.086a9 9 0 0 1-7.522 1.695M19.645 16.724a8.9 8.9 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.35-8.657"
    />
  </Svg>
);
export default IconlystLoadingCircle1Light;
