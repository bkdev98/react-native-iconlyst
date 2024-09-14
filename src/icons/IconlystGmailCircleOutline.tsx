import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGmailCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.133 8.567a.38.38 0 0 0-.534.017.38.38 0 0 0-.106.266v6.304c0 .21.17.381.382.381.096 0 .297-.003.513-.007V11.52a.75.75 0 0 1 1.216-.588l2.4 1.902 2.43-1.903a.75.75 0 0 1 1.213.59v4.006c.2.004.386.007.478.007.211 0 .382-.17.382-.38V8.85a.38.38 0 0 0-.106-.266.38.38 0 0 0-.538-.014l-.054.047-3.345 2.612a.75.75 0 0 1-.923 0l-3.35-2.611zm6.746 8.444a.75.75 0 0 1-.732-.75v-3.2l-1.682 1.318a.75.75 0 0 1-.929-.003l-1.648-1.305v3.192a.75.75 0 0 1-.733.75l-.16.003-1.12.02a1.88 1.88 0 0 1-1.882-1.882V8.86c-.003-.469.17-.941.518-1.308a1.88 1.88 0 0 1 2.63-.096L12 9.686l2.86-2.231a1.88 1.88 0 0 1 2.628.097c.348.366.52.838.518 1.307v6.294a1.88 1.88 0 0 1-1.882 1.881c-.145 0-.46-.006-.731-.011l-.36-.008z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGmailCircleOutline;
