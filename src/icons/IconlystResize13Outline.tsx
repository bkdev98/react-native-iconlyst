import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize13Outline = ({
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
      d="M3.898 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.046v8.435c0 1.66-.59 3.062-1.648 4.045-1.05.979-2.501 1.487-4.128 1.487H8.026c-1.628 0-3.078-.512-4.129-1.49-1.056-.985-1.647-2.387-1.647-4.042V7.783c0-1.66.59-3.062 1.648-4.046M4.92 4.835c-.72.67-1.17 1.66-1.17 2.948v8.435c0 1.283.45 2.272 1.17 2.944.727.678 1.79 1.088 3.106 1.088h7.948c1.317 0 2.38-.409 3.106-1.084.72-.67 1.17-1.66 1.17-2.948V7.783c0-1.289-.45-2.278-1.17-2.948-.726-.676-1.789-1.085-3.106-1.085H8.026c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.497 6.497a.75.75 0 0 1 .532-.22l2.612.006a.75.75 0 0 1-.003 1.5l-.796-.002 1.56 1.56a.75.75 0 0 1-1.061 1.06l-1.56-1.56.001.798a.75.75 0 1 1-1.5.003L6.277 7.03c0-.2.08-.391.22-.532M10.402 13.599a.75.75 0 0 1 0 1.06L8.84 16.22l.797-.002a.75.75 0 0 1 .003 1.5l-2.612.006a.75.75 0 0 1-.752-.751l.005-2.614a.75.75 0 0 1 1.5.003l-.001.797 1.56-1.56a.75.75 0 0 1 1.06 0M13.599 13.603a.75.75 0 0 1 1.06 0l1.561 1.56-.002-.798a.75.75 0 0 1 1.5-.003l.006 2.612a.75.75 0 0 1-.785.752l-2.58-.005a.75.75 0 0 1 .003-1.5l.796.002-1.56-1.56a.75.75 0 0 1 0-1.06M17.505 6.497a.75.75 0 0 1 .22.532l-.006 2.613a.75.75 0 1 1-1.5-.003l.002-.797-1.56 1.56a.75.75 0 0 1-1.06-1.061l1.56-1.56-.798.002a.75.75 0 1 1-.003-1.5l2.613-.006c.2 0 .391.079.532.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystResize13Outline;
