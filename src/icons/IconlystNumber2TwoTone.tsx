import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber2TwoTone = ({
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
      d="M12.5 3.383a5.663 5.663 0 0 0-5.661 5.66 1.8 1.8 0 1 0 3.6 0c0-1.136.924-2.06 2.06-2.06 1.138 0 2.062.924 2.062 2.06 0 .747-.175 1.229-.518 1.816-.638 1.09-1.652 2.142-2.74 3.27q-.468.482-.944.987l-3.031 3.236a1.8 1.8 0 0 0 1.314 3.03"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 3.383a5.663 5.663 0 0 1 5.661 5.66c0 1.522-.422 2.625-1.01 3.633-.88 1.507-2.315 2.985-3.434 4.14-.265.273-.512.528-.73.76l-.193.207h3.567a1.8 1.8 0 0 1 0 3.6h-7.72"
    />
  </Svg>
);
export default IconlystNumber2TwoTone;
