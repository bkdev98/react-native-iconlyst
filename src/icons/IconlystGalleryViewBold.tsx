import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewBold = ({
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
      d="M9.645 14.69a.3.3 0 0 1-.3-.3V9.653a.3.3 0 0 1 .3-.3h4.738a.3.3 0 0 1 .3.3v4.737a.3.3 0 0 1-.3.3z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.783 2.25c-1.656 0-3.058.592-4.043 1.648-.979 1.05-1.49 2.5-1.49 4.128v7.948c0 1.627.509 3.077 1.487 4.128.984 1.057 2.387 1.648 4.046 1.648h8.433c1.66 0 3.062-.591 4.046-1.648.979-1.05 1.487-2.501 1.487-4.129V8.026c0-1.627-.508-3.077-1.486-4.128-.984-1.057-2.387-1.648-4.046-1.648zm-4.03 5.603-.003.173v1.327h3.795a.3.3 0 0 1 .3.3v4.737a.3.3 0 0 1-.3.3H3.75v1.284q0 .108.004.216h3.788a.3.3 0 0 1 .3.303l-.044 3.757h1.547v-3.76a.3.3 0 0 1 .3-.3h4.738a.3.3 0 0 1 .3.3v3.76h1.525l-.024-3.758a.3.3 0 0 1 .3-.302h3.761q.004-.108.004-.217V14.69h-3.766a.3.3 0 0 1-.3-.3V9.653a.3.3 0 0 1 .3-.3h3.766V8.026q0-.087-.002-.173h-3.763a.3.3 0 0 1-.3-.302l.025-3.8h-1.527v3.802a.3.3 0 0 1-.3.3H9.646a.3.3 0 0 1-.3-.3V3.75H7.798l.044 3.8a.3.3 0 0 1-.3.303z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGalleryViewBold;
