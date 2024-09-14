import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheersBold = ({
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
      d="m6.82 7.2 3.67.6c0 .41-.03.83-.06 1.26-1.16.6-3 1.27-4.31 1.15.15-1.03.4-2.07.7-3.01m2.92 8.64c2.34-2.56 2.26-8.08 2.24-8.7a.75.75 0 0 0-.63-.72l-4.91-.8a.75.75 0 0 0-.83.49c-.21.58-2.03 5.8-.61 8.97.28.63.79 1.13 1.43 1.41l-.49 3.11-1-.16c-.41-.07-.8.21-.86.62-.07.41.21.79.62.86l3.45.56A.75.75 0 0 0 8.39 20l-.97-.16.49-3.11c.7-.07 1.35-.37 1.83-.89M14.1 8.64l3.69-.42c.26.95.46 2 .56 3.03-1.31.06-3.12-.69-4.25-1.34-.02-.43-.02-.86 0-1.27m4.98 11.89-.99.11-.36-3.12c.66-.25 1.2-.73 1.52-1.35 1.56-3.1-.02-8.4-.2-8.99a.76.76 0 0 0-.8-.52l-4.95.56c-.36.04-.64.33-.67.69-.04.62-.38 6.14 1.84 8.8.45.54 1.08.87 1.77.97l.36 3.13-.99.12c-.42.04-.71.41-.66.83.04.38.37.66.74.66h.09l1.73-.2h.01l1.73-.2c.42-.05.71-.42.66-.83-.04-.41-.4-.7-.83-.66M9.8 5.592a.747.747 0 0 0 1.06.044.75.75 0 0 0 .045-1.06l-.949-1.028a.75.75 0 1 0-1.103 1.016zM14.69 6.423a.75.75 0 0 0 .423-.131l1.154-.79a.75.75 0 1 0-.848-1.238l-1.153.79a.75.75 0 0 0 .424 1.369M13.415 4.673l.191-1.385a.75.75 0 0 0-1.486-.205l-.19 1.385a.751.751 0 0 0 1.485.205"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheersBold;
