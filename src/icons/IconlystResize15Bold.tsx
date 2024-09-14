import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize15Bold = ({
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
      d="m9.22 13.614-3.214 3.214.004-2.104a1 1 0 0 0-.998-1.002H5.01a1 1 0 0 0-1 .998L4 19.202c-.011.269.085.543.289.75q.003.001.005.004a1 1 0 0 0 .707.293h.002l4.526-.01a1 1 0 0 0-.002-2h-.002l-2.106.005 3.215-3.216a.999.999 0 1 0-1.414-1.414M19.987 5.094v-.009000000000000001q0 0-.002-.003V5.08a1 1 0 0 0-.24-.497h-.002V4.58a.969.969 0 0 0-.348-.249 1 1 0 0 0-.397-.08l-4.526.01a1 1 0 0 0 .002 2h.002l2.105-.005-3.214 3.214a.999.999 0 1 0 1.414 1.414l3.215-3.215-.004 2.105a1 1 0 0 0 .998 1.002h.002a1 1 0 0 0 1-.998L20 5.254v-.02a1 1 0 0 0-.013-.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize15Bold;
