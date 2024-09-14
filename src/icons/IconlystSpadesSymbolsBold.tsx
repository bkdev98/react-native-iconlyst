import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesSymbolsBold = ({
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
      d="M20.72 12.081c-.215-2.414-1.978-4.159-2.996-4.973l-4.87-4.184q-.39-.421-.85-.424H12c-.306 0-.593.143-.81.383L6.276 7.108C4.064 9.01 3.06 11.065 3.29 13.217c.196 1.828 1.356 3.985 3.416 4.396.523.131.997.187 1.43.187.758 0 1.376-.183 1.913-.434-.273 1.771-1.59 3.267-1.605 3.284a.51.51 0 0 0-.085.548.51.51 0 0 0 .465.302h6.373a.51.51 0 0 0 .38-.85c-.015-.017-1.326-1.505-1.604-3.27.846.39 1.9.59 3.324.233 1.73-.432 3.018-1.979 3.364-4.036a6 6 0 0 0 .06-1.496"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpadesSymbolsBold;
