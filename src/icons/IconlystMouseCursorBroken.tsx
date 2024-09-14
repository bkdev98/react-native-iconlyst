import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMouseCursorBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.186 12.5H20.14m-15.91 0H3.185m15.5-6.501-1 1M5.709 19.021l1-1M5.686 6.023l1 .999m12.022 11.977-1-1m-5.523 2.5v1m0-17.999v1M9.859 10.542c-.174-.778.679-1.377 1.351-.951l4.38 2.611c.673.427.494 1.455-.284 1.629l-1.828.41a.2.2 0 0 0-.13.09l-.88 1.377c-.428.67-1.452.489-1.626-.286l-.492-2.44"
    />
  </Svg>
);
export default IconlystMouseCursorBroken;
