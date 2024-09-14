import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewBulk = ({
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
      d="M8.283 2.25c-1.656 0-3.058.591-4.043 1.647-.979 1.05-1.49 2.5-1.49 4.129v7.947c0 1.627.509 3.078 1.487 4.129.984 1.056 2.387 1.647 4.046 1.647h8.433c1.66 0 3.062-.59 4.046-1.648.979-1.05 1.487-2.5 1.487-4.128V8.026c0-1.627-.508-3.078-1.486-4.128-.984-1.057-2.387-1.648-4.046-1.648z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m4.252 7.853-.002.173v1.327h3.795a.3.3 0 0 1 .3.3v4.736a.3.3 0 0 1-.3.3H4.25v1.284q0 .11.004.216h3.788a.3.3 0 0 1 .3.304l-.044 3.756h1.547v-3.76a.3.3 0 0 1 .3-.3h4.738a.3.3 0 0 1 .3.3v3.76h1.525l-.024-3.758a.3.3 0 0 1 .3-.302h3.761q.004-.107.004-.216V14.69h-3.766a.3.3 0 0 1-.3-.3V9.653a.3.3 0 0 1 .3-.3h3.766V8.026q0-.087-.002-.173h-3.763a.3.3 0 0 1-.3-.302l.025-3.801h-1.527v3.803a.3.3 0 0 1-.3.3h-4.736a.3.3 0 0 1-.3-.3V3.75H8.297l.044 3.799a.3.3 0 0 1-.3.304zm5.593 6.537a.3.3 0 0 0 .3.3h4.738a.3.3 0 0 0 .3-.3V9.653a.3.3 0 0 0-.3-.3h-4.737a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewBulk;
