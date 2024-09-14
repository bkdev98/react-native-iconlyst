import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashRefreshOutline = ({
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
      d="M19.47 2.525a.75.75 0 0 1 .793.705l.2 3.407a.75.75 0 0 1-.705.793l-3.388.199a.75.75 0 0 1-.088-1.498l2.64-.155-.157-2.659a.75.75 0 0 1 .705-.792"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75A8.25 8.25 0 1 0 20.5 12a.75.75 0 0 1 1.5 0c0 5.384-4.366 9.75-9.75 9.75S2.5 17.383 2.5 12s4.365-9.75 9.75-9.75a9.74 9.74 0 0 1 7.85 3.968.75.75 0 1 1-1.207.89A8.24 8.24 0 0 0 12.25 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.62 7.27a.75.75 0 0 1 .3 1.018l-1.516 2.79h2.955a.75.75 0 0 1 .659 1.108l-2.121 3.894a.75.75 0 0 1-1.318-.717l1.518-2.785h-2.954a.75.75 0 0 1-.66-1.109l2.12-3.897a.75.75 0 0 1 1.017-.301"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashRefreshOutline;
