import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.155 10.075c-.59-1.095-3.691-6.548-6.888-6.573l-.011-.002-.004.001-.007-.001c-3.195 0-6.31 5.477-6.9 6.575a.998.998 0 0 0 .879 1.475 1 1 0 0 0 .88-.526c.962-1.782 2.728-4.241 4.152-5.157V19.5a1 1 0 1 0 2 0V5.871c1.42.91 3.153 3.326 4.139 5.153a1 1 0 0 0 1.76-.949"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUpBoldcurved;
