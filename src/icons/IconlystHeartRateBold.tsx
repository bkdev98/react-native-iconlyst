import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartRateBold = ({
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
      d="M17.264 11.125h-2.168a.75.75 0 0 1-.645-.366l-.097-.164-1.221 2.708a.75.75 0 0 1-.683.442h-.039a.75.75 0 0 1-.672-.512l-1.237-3.695-.36 1.075a.75.75 0 0 1-.711.512H6.733a.75.75 0 0 1 0-1.5h2.158l.901-2.688a.75.75 0 0 1 1.422 0l1.339 4.002 1.024-2.272a.75.75 0 0 1 .641-.44.72.72 0 0 1 .688.364l.616 1.034h1.742a.75.75 0 0 1 0 1.5m-7.136 8.72.434-2.67h2.875l.434 2.67zm6.843-17.19H7.029A4.536 4.536 0 0 0 2.5 7.186v5.46a4.535 4.535 0 0 0 4.529 4.53h2.013l-.434 2.67H7.055a.75.75 0 0 0 0 1.5h9.889a.75.75 0 0 0 0-1.5h-1.553l-.434-2.67h2.014a4.535 4.535 0 0 0 4.529-4.53v-5.46a4.536 4.536 0 0 0-4.529-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartRateBold;
