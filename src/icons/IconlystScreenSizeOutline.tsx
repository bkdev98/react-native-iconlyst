import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSizeOutline = ({
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
      d="M3.982 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.046v8.435c0 1.66-.59 3.062-1.648 4.045-1.05.979-2.501 1.487-4.128 1.487H8.11c-1.628 0-3.078-.512-4.129-1.49-1.056-.985-1.647-2.387-1.647-4.042V7.783c0-1.66.59-3.062 1.648-4.046m1.022 1.098c-.72.67-1.17 1.66-1.17 2.948v8.435c0 1.283.45 2.272 1.17 2.944.727.678 1.79 1.088 3.106 1.088h7.948c1.317 0 2.38-.409 3.106-1.084.72-.67 1.17-1.66 1.17-2.948V7.783c0-1.289-.45-2.278-1.17-2.948-.726-.676-1.789-1.085-3.106-1.085H8.11c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.511 13.422a.75.75 0 0 1 .749.751l-.002 1.006c0 .357.29.646.644.645l1.007-.002a.75.75 0 1 1 .003 1.5l-1.006.002a2.144 2.144 0 0 1-2.148-2.147l.002-1.007a.75.75 0 0 1 .751-.748M16.655 13.422a.75.75 0 0 1 .751.748l.002 1.006a2.143 2.143 0 0 1-2.147 2.148l-1.007-.002a.75.75 0 0 1 .003-1.5l1.007.002a.643.643 0 0 0 .644-.644l-.002-1.007a.75.75 0 0 1 .749-.751M8.904 8.176a.643.643 0 0 0-.644.644l.002 1.007a.75.75 0 0 1-1.5.002L6.76 8.825a2.143 2.143 0 0 1 2.146-2.148h.001l1.007.003a.75.75 0 0 1-.004 1.5zM15.91 8.82a.643.643 0 0 0-.644-.644l-1.007.002a.75.75 0 0 1-.003-1.5l1.006-.002a2.143 2.143 0 0 1 2.148 2.146l-.002 1.007a.75.75 0 1 1-1.5-.003z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScreenSizeOutline;
