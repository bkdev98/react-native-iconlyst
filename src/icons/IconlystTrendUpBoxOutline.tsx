import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpBoxOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.398 3.855c1.05-.978 2.501-1.486 4.128-1.486h7.948c1.628 0 3.078.51 4.129 1.49 1.056.984 1.647 2.386 1.647 4.042v8.435c0 1.659-.59 3.062-1.648 4.046-1.05.978-2.5 1.487-4.128 1.487H8.526c-1.627 0-3.078-.51-4.128-1.488-1.057-.984-1.648-2.387-1.648-4.047V7.901c0-1.66.59-3.062 1.648-4.046M5.42 4.953c-.72.67-1.17 1.66-1.17 2.948v8.433c0 1.29.45 2.28 1.17 2.95.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.41 3.106-1.085.72-.67 1.17-1.66 1.17-2.948V7.9c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.106-1.087H8.526c-1.317 0-2.38.408-3.106 1.084"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.384 7.395a.75.75 0 0 1 .92.528l.843 3.125a.75.75 0 0 1-1.448.39l-.648-2.4-2.4.648a.75.75 0 0 1-.391-1.449z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.954 7.469a.75.75 0 0 1 .276 1.024l-3.614 6.281a.75.75 0 0 1-1.024.276l-2.656-1.528-1.71 2.973a.75.75 0 1 1-1.3-.748l2.084-3.623a.75.75 0 0 1 1.024-.276l2.656 1.528 3.24-5.631a.75.75 0 0 1 1.024-.276"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendUpBoxOutline;