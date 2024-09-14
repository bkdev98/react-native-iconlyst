import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels2TwoTone = ({
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
      d="M16.849 21H8.153c-2.661 0-4.317-1.878-4.317-4.536V7.536C3.836 4.878 5.492 3 8.154 3h8.695c2.66 0 4.315 1.878 4.315 4.536v8.928c0 2.658-1.662 4.536-4.315 4.536"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.193 20.977v-3.622m4.286 3.622v-3.622m4.287 3.622v-3.622M3.95 17.352h17.105M21.052 6.65H3.947M8.192 3v3.646M12.478 3v3.646M16.765 3v3.646"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.727 13.027a9 9 0 0 1-2.63 1.65c-.85.335-1.562-.082-1.666-.92a16.4 16.4 0 0 1 0-3.518c.114-.87.897-1.24 1.665-.916a8.8 8.8 0 0 1 2.63 1.651c.656.593.672 1.436 0 2.053"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReels2TwoTone;
