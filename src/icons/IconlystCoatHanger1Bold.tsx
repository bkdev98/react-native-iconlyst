import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger1Bold = ({
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
      d="M10.851 11.82c-2.305 1.282-5.444 3.02-5.969 3.311a1 1 0 0 1-.093.044A1.3 1.3 0 0 0 4 16.366c0 .797.579 1.38 1.29 1.38h13.42c.711 0 1.29-.583 1.29-1.3a1.29 1.29 0 0 0-.793-1.185zm7.859 7.926H5.29a3.3 3.3 0 0 1-3.29-3.3c0-1.383.766-2.559 1.955-3.088 3.201-1.77 8.035-4.454 8.346-4.645 1.1-.656.896-1.373.819-1.643-.113-.392-.394-.683-.752-.777a1.17 1.17 0 0 0-1.026.205 1.3 1.3 0 0 0-.513 1.028 1 1 0 1 1-2 0c0-1.014.483-1.99 1.293-2.613a3.17 3.17 0 0 1 2.758-.554c1.044.275 1.852 1.083 2.162 2.16.448 1.571-.174 2.993-1.706 3.905-.038.024-.127.075-.258.15l6.888 2.837A3.265 3.265 0 0 1 22 16.446a3.3 3.3 0 0 1-3.29 3.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoatHanger1Bold;
