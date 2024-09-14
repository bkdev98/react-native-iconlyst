import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare4Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M5.745 8.398a.75.75 0 0 0 1.06-.059A6.97 6.97 0 0 1 9.92 6.33a.75.75 0 0 0-.447-1.432A8.5 8.5 0 0 0 5.686 7.34a.75.75 0 0 0 .06 1.06M3.783 15.087a.75.75 0 0 0 1.455-.368 7 7 0 0 1-.007-3.399.75.75 0 0 0-1.458-.352 8.6 8.6 0 0 0-.248 2.028c0 .71.087 1.412.258 2.091M13.257 20.648a.75.75 0 0 0 .913.54 8.34 8.34 0 0 0 3.484-1.867.75.75 0 1 0-1.003-1.115 6.8 6.8 0 0 1-2.854 1.528.75.75 0 0 0-.54.914M10.02 21.227a.8.8 0 0 1-.192-.025 8.35 8.35 0 0 1-3.47-1.89.749.749 0 1 1 1.01-1.11 6.86 6.86 0 0 0 2.843 1.55.75.75 0 0 1-.19 1.475M17.727 8.562a.75.75 0 0 1-.557-.248 7 7 0 0 0-3.091-1.984.751.751 0 0 1 .448-1.432 8.47 8.47 0 0 1 3.757 2.412.75.75 0 0 1-.557 1.252M19.311 15.63a.75.75 0 0 0 .912-.543 8.6 8.6 0 0 0 .258-2.09c0-.667-.083-1.349-.248-2.029a.75.75 0 1 0-1.458.352 6.992 6.992 0 0 1-.007 3.399.75.75 0 0 0 .543.911" />
    </G>
    <Path
      fill={props.color}
      d="M9.197 5.575A2.806 2.806 0 0 0 12 8.378a2.805 2.805 0 0 0 2.802-2.803A2.805 2.805 0 0 0 12 2.772a2.806 2.806 0 0 0-2.803 2.803M2.5 17.065a2.806 2.806 0 0 0 2.803 2.802 2.806 2.806 0 0 0 2.803-2.803 2.806 2.806 0 0 0-2.803-2.802A2.806 2.806 0 0 0 2.5 17.064M15.894 17.065a2.806 2.806 0 0 0 2.803 2.802 2.806 2.806 0 0 0 2.803-2.803 2.806 2.806 0 0 0-2.803-2.802 2.806 2.806 0 0 0-2.803 2.802"
    />
  </Svg>
);
export default IconlystShare4Bulk;
