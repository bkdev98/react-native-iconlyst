import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeavesBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.483 7.196a4 4 0 0 1-.258.028m0 0a8 8 0 0 1-.907 0m.907 0h.26m-.26 0h-.907m0 0c-.245-.01-.49-.02-.735-.014-1.47.036-2.62 1.278-3.739 2.12a1.43 1.43 0 0 1-1.877-.134 1.446 1.446 0 0 1 0-2.04C6.175 5.946 7.242 4.82 8.88 4.183c2.249-.875 4.337-.463 6.611-.014l.07.014m-4.243 3.042h-.074M4.547 13.924h.93c.71 0 1.153.502 1.153 1.211v1.763M4.547 20.503h.93c.71 0 1.153-.5 1.153-1.21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.946 13.75c-1.021-.257-2.04-.459-3.107-.432-1.69.04-2.871.982-4.21 1.88M12.319 16.804q.129-.02.258-.028m0 0c.3-.022.604-.012.907 0m-.907 0h-.26m.26 0h.907m0 0c.245.01.49.02.735.014 1.469-.035 2.62-1.278 3.738-2.12a1.43 1.43 0 0 1 1.877.135c.561.562.561 1.475 0 2.038-1.208 1.213-2.275 2.339-3.912 2.975-2.272.884-4.38.454-6.68 0m4.242-3.042h.073M10.855 10.25c1.021.257 2.04.459 3.107.432 1.69-.04 2.871-.982 4.21-1.88M20.255 10.076h-.93c-.711 0-1.153-.502-1.153-1.211V7.182M20.255 3.5h-.93c-.711 0-1.153.5-1.153 1.21"
    />
  </Svg>
);
export default IconlystLeavesBroken;
