import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnUpSquareOutline = ({
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
      d="M20.103 3.74c1.056.985 1.647 2.387 1.647 4.042v8.435c0 1.66-.59 3.062-1.648 4.046-1.05.978-2.5 1.487-4.128 1.487H8.026c-1.627 0-3.078-.509-4.128-1.487-1.057-.985-1.648-2.387-1.648-4.047V7.782c0-1.66.59-3.062 1.648-4.045 1.05-.979 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.129 1.49M19.08 4.837c-.727-.677-1.79-1.087-3.106-1.087H8.026c-1.317 0-2.38.409-3.106 1.085-.72.67-1.17 1.658-1.17 2.947v8.434c0 1.29.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.409 3.106-1.085.72-.67 1.17-1.66 1.17-2.948V7.782c0-1.284-.45-2.273-1.17-2.945"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.679 10.709a.75.75 0 0 1-1.06 0l-1.415-1.414-1.413 1.414a.75.75 0 0 1-1.06-1.061l1.943-1.944a.75.75 0 0 1 1.06 0l1.945 1.944a.75.75 0 0 1 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.205 7.48a.75.75 0 0 1 .75.75v4.616a3.67 3.67 0 1 1-7.34 0V8.563a.75.75 0 1 1 1.5 0v4.283a2.17 2.17 0 1 0 4.34 0V8.23a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnUpSquareOutline;
