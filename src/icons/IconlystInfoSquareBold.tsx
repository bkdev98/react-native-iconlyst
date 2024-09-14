import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.34 2C19.73 2 22 4.38 22 7.92v8.17c0 3.53-2.27 5.91-5.66 5.91H7.67C4.28 22 2 19.62 2 16.09V7.92C2 4.38 4.28 2 7.67 2Zm-4.35 8.48c-.48 0-.87.4-.87.88v4.42c0 .48.39.87.87.87.49 0 .88-.39.88-.87v-4.42a.88.88 0 0 0-.88-.88m.02-3.17c-.49 0-.88.39-.88.88 0 .48.39.87.86.87a.876.876 0 1 0 .02-1.75"
    />
  </Svg>
);
export default IconlystInfoSquareBold;
