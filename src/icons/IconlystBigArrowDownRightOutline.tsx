import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownRightOutline = ({
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
      d="M6.42 3.873c.83-.83 2.177-.83 3.008 0l5.238 5.238 1.604-1.605c1.347-1.346 3.644-.382 3.64 1.515q-.004 2.635 0 5.269v3.498c0 1.17-.948 2.12-2.12 2.123q-2.038.002-4.063 0c-1.564-.002-3.127-.004-4.698 0-1.897.005-2.868-2.295-1.52-3.644l1.602-1.601-5.238-5.238a2.127 2.127 0 0 1 0-3.008zm1.947 1.06a.627.627 0 0 0-.886 0L4.934 7.482a.627.627 0 0 0 0 .886l5.393 5.394c.5.5.5 1.31 0 1.81L8.57 17.327c-.395.396-.114 1.086.455 1.084 1.565-.004 3.139-.002 4.71 0q2.034.002 4.053 0c.343 0 .622-.28.622-.624v-3.492q-.004-2.64 0-5.277a.634.634 0 0 0-1.079-.452l-1.76 1.761c-.5.5-1.31.5-1.81 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownRightOutline;
