import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalExpandSquareOutline = ({
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
      d="M12 5.75a.75.75 0 0 1 .53.22l2.445 2.444a.75.75 0 1 1-1.06 1.06L12.75 8.312v7.378l1.164-1.164a.75.75 0 0 1 1.06 1.06L12.53 18.03a.75.75 0 0 1-1.06 0l-2.445-2.444a.75.75 0 0 1 1.061-1.06l1.164 1.163V8.311l-1.164 1.164a.75.75 0 1 1-1.06-1.06L11.47 5.97a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.898 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.046v8.435c0 1.66-.59 3.062-1.648 4.045-1.05.979-2.501 1.487-4.128 1.487H8.026c-1.628 0-3.078-.512-4.129-1.49-1.056-.985-1.647-2.387-1.647-4.042V7.783c0-1.66.59-3.062 1.648-4.046M4.92 4.835c-.72.67-1.17 1.66-1.17 2.948v8.435c0 1.283.45 2.272 1.17 2.944.727.678 1.79 1.088 3.106 1.088h7.948c1.317 0 2.38-.409 3.106-1.084.72-.67 1.17-1.66 1.17-2.948V7.783c0-1.289-.45-2.278-1.17-2.948-.726-.676-1.789-1.085-3.106-1.085H8.026c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsVerticalExpandSquareOutline;
