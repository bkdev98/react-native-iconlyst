import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxUpOutline = ({
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
      d="M3.837 3.898C4.82 2.84 6.223 2.25 7.883 2.25h8.434c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.501 1.487 4.128v7.948c0 1.628-.512 3.078-1.491 4.129-.985 1.056-2.387 1.647-4.042 1.647H7.883c-1.66 0-3.062-.59-4.046-1.648-.979-1.05-1.487-2.5-1.487-4.128V8.026c0-1.627.508-3.078 1.487-4.128M4.935 4.92c-.677.726-1.085 1.789-1.085 3.106v7.948c0 1.317.408 2.38 1.085 3.106.67.72 1.659 1.17 2.948 1.17h8.434c1.284 0 2.273-.45 2.945-1.17.677-.727 1.088-1.79 1.088-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.659-1.17-2.948-1.17H7.883c-1.289 0-2.278.45-2.948 1.17m4.193 1.613c.2 0 .391.08.532.221l1.665 1.672a.75.75 0 0 1-1.062 1.058L9.879 9.1v4.374a.75.75 0 0 1-1.5 0V9.1l-.383.385a.75.75 0 0 1-1.063-1.058l1.664-1.672a.75.75 0 0 1 .531-.22m5.94 0c.2 0 .391.08.532.221l1.666 1.672a.75.75 0 1 1-1.063 1.058L15.82 9.1v4.374a.75.75 0 1 1-1.5 0V9.1l-.383.385a.75.75 0 1 1-1.063-1.058l1.663-1.672a.75.75 0 0 1 .532-.22M6.813 16.717a.75.75 0 0 1 .75-.75h9.077a.75.75 0 0 1 0 1.5H7.562a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxUpOutline;
