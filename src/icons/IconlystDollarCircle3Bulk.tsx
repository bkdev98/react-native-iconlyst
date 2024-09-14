import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarCircle3Bulk = ({
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
      d="M12 2.563c-5.238 0-9.5 4.262-9.5 9.5 0 5.237 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 15.643h.058a2.165 2.165 0 0 0 2.164-2.16c0-1.192-.97-2.16-2.164-2.16h-1.615a.67.67 0 0 1-.664-.67c0-.364.298-.66.664-.66h2.625a.75.75 0 0 0 0-1.5H12.75v-.44a.75.75 0 0 0-1.5 0v.44h-.057a2.163 2.163 0 0 0-2.164 2.16c0 1.196.97 2.17 2.164 2.17h1.615c.366 0 .664.296.664.66s-.298.66-.664.66h-2.625a.75.75 0 0 0 0 1.5h1.067v.44a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default IconlystDollarCircle3Bulk;
