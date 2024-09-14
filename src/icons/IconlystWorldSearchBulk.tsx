import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorldSearchBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M13.907 10.882c-.136-4.364-1.498-7.114-2.453-7.114S9.137 6.518 9 10.882zM13.383 12.31h-4.38c.13 4.36 1.5 7.11 2.45 7.11.13 0 .27-.06.42-.17-.4-.77-.61-1.64-.61-2.54 0-1.5.58-2.91 1.64-3.98.15-.15.31-.3.48-.42M15.33 10.882h5.099a9.02 9.02 0 0 0-7.92-8.232c1.75 1.024 2.71 4.563 2.82 8.232M10.399 2.65a9.016 9.016 0 0 0-7.92 8.233h5.099c.11-3.67 1.07-7.208 2.82-8.232M7.578 12.305h-5.1a9.02 9.02 0 0 0 7.92 8.232c-1.75-1.024-2.71-4.563-2.82-8.232" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.203 18.38a2.35 2.35 0 0 1-.693-1.674c0-.632.246-1.226.693-1.674a2.35 2.35 0 0 1 1.674-.693c.633 0 1.227.246 1.675.693.446.448.693 1.042.693 1.674 0 .633-.246 1.226-.693 1.673-.894.897-2.454.897-3.349 0m6.098 1.689-1.21-1.21a3.84 3.84 0 0 0 .654-2.153 3.84 3.84 0 0 0-1.133-2.734c-1.46-1.461-4.009-1.461-5.47 0a3.84 3.84 0 0 0-1.132 2.734c0 1.033.402 2.004 1.132 2.735a3.84 3.84 0 0 0 2.735 1.133c.78 0 1.522-.23 2.153-.654l1.211 1.21a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWorldSearchBulk;
