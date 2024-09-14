import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSticker2Outline = ({
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
      d="M3.99 3.983c.985-1.045 2.387-1.628 4.043-1.628h8.434c1.657 0 3.059.583 4.043 1.628.98 1.04 1.49 2.477 1.49 4.09v5.823c0 .813-.318 1.595-.886 2.179l-4.475 4.606a3.18 3.18 0 0 1-2.283.963H8.033c-1.652 0-3.054-.583-4.04-1.628-.98-1.04-1.493-2.476-1.493-4.09V8.073c0-1.613.51-3.05 1.49-4.09m1.092 1.029C4.407 5.727 4 6.774 4 8.072v7.854c0 1.297.409 2.344 1.085 3.06.671.712 1.662 1.158 2.948 1.158h6.323c.457 0 .892-.185 1.207-.508l4.475-4.607c.297-.305.462-.712.462-1.133V8.073c0-1.299-.407-2.346-1.081-3.061-.67-.711-1.66-1.157-2.952-1.157H8.033c-1.292 0-2.282.446-2.951 1.157"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.938 13.71h3.235a.75.75 0 0 1 0 1.5H17.94c-1.26.004-2.266 1.012-2.265 2.237v3.374a.75.75 0 0 1-1.5 0v-3.373c-.001-2.069 1.69-3.733 3.762-3.737M7.423 9.207a.75.75 0 0 1 .75-.75h6.433a.75.75 0 0 1 0 1.5H8.173a.75.75 0 0 1-.75-.75m-.001 4.717a.75.75 0 0 1 .75-.75h3.998a.75.75 0 1 1 0 1.5H8.172a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSticker2Outline;
