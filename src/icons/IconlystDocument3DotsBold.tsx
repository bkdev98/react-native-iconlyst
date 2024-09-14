import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocument3DotsBold = ({
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
      d="m14.883 8.969-5.758.009a.75.75 0 0 1 0-1.5l5.743-.009h.008a.75.75 0 0 1 .007 1.5m.238 7.066a.75.75 0 0 1-1.064.003.745.745 0 0 1-.002-1.057l.005-.006a.749.749 0 1 1 1.06 1.06m-2.426-2.767a.754.754 0 0 1-1.047.178.746.746 0 0 1-.178-1.042l.005-.007a.749.749 0 1 1 1.22.871m-2.75 2.767a.753.753 0 0 1-1.064.003.745.745 0 0 1-.003-1.057l.006-.006a.75.75 0 0 1 1.06 1.06M16.037 2.5H7.963a4.625 4.625 0 0 0-4.62 4.62v9.76a4.624 4.624 0 0 0 4.62 4.62h8.073a4.625 4.625 0 0 0 4.62-4.62V7.12a4.625 4.625 0 0 0-4.62-4.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocument3DotsBold;
