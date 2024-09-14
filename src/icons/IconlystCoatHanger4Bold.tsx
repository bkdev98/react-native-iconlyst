import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger4Bold = ({
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
      d="M18.705 16.576h-1.032a1.777 1.777 0 0 0-1.769-1.67H8.089c-.944 0-1.711.74-1.769 1.67H5.286c-.847 0-1.536-.691-1.536-1.631 0-.62.368-1.177.948-1.423l6.987-3.082c.016.008.029.02.045.028l7.566 3.139c.579.243.954.804.954 1.428 0 .85-.693 1.54-1.545 1.54m1.169-4.353-7.106-2.95a.48.48 0 0 1 .324-.42c1.416-.552 2.17-2.091 1.755-3.58a2.93 2.93 0 0 0-2.034-2.002 2.97 2.97 0 0 0-2.593.506 2.92 2.92 0 0 0-1.148 2.328.75.75 0 0 0 1.5 0c0-.448.205-.863.563-1.138.366-.285.826-.37 1.293-.246.457.122.848.506.974.956a1.45 1.45 0 0 1-.847 1.777 1.97 1.97 0 0 0-1.234 1.507l-7.219 3.184c-1.125.478-1.852 1.577-1.852 2.89a3.04 3.04 0 0 0 3.036 3.04h1.023v.98c0 .982.798 1.78 1.78 1.78h7.815c.981 0 1.78-.798 1.78-1.78v-.98h1.021a3.046 3.046 0 0 0 3.045-3.04c0-1.23-.735-2.332-1.876-2.812"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoatHanger4Bold;
