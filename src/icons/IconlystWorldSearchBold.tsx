import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldSearchBold = ({
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
      d="M13.907 10.882c-.136-4.364-1.498-7.114-2.453-7.114s-2.316 2.75-2.452 7.114zM13.383 12.31h-4.38c.13 4.36 1.5 7.11 2.45 7.11.13 0 .27-.06.42-.17-.4-.77-.61-1.64-.61-2.54 0-1.5.58-2.91 1.64-3.98.15-.15.31-.3.48-.42M15.33 10.882h5.099a9.02 9.02 0 0 0-7.92-8.232c1.75 1.024 2.71 4.563 2.82 8.232M10.399 2.65a9.016 9.016 0 0 0-7.92 8.233h5.099c.11-3.67 1.07-7.208 2.82-8.232M7.578 12.305H2.479a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.711-4.563-2.821-8.232M15.203 18.38a2.35 2.35 0 0 1-.693-1.674c0-.633.246-1.226.693-1.674a2.35 2.35 0 0 1 1.674-.694c.633 0 1.227.247 1.675.694.446.447.693 1.041.693 1.674s-.246 1.226-.693 1.672v.002c-.894.896-2.454.896-3.349 0m6.098 1.689-1.21-1.21a3.84 3.84 0 0 0 .654-2.154 3.84 3.84 0 0 0-1.133-2.733c-1.46-1.461-4.009-1.461-5.47 0a3.84 3.84 0 0 0-1.132 2.734c0 1.032.402 2.003 1.132 2.735a3.84 3.84 0 0 0 2.735 1.133c.78 0 1.522-.23 2.153-.655l1.211 1.21a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldSearchBold;
