import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnonymousOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.216 14.986a2.46 2.46 0 1 0 0 4.92 2.46 2.46 0 0 0 0-4.92m-3.96 2.46a3.96 3.96 0 1 1 7.92 0 3.96 3.96 0 0 1-7.92 0M17.286 14.986a2.46 2.46 0 1 0 0 4.92 2.46 2.46 0 0 0 0-4.92m-3.96 2.46a3.96 3.96 0 1 1 7.92 0 3.96 3.96 0 0 1-7.92 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.131 17.435c-.483-.012-.874.148-1.13.454a.75.75 0 1 1-1.15-.964c.608-.724 1.476-1.01 2.319-.99.836.022 1.687.343 2.371.884a.75.75 0 0 1-.93 1.177c-.447-.354-.99-.548-1.48-.56M8.302 2.946c.61-.17 1.266-.083 1.817.397q.036.03.067.067c.445.5.76.618.964.642.224.027.475-.039.847-.216.126-.06.243-.121.373-.189l.216-.112c.211-.107.45-.224.707-.315.528-.188 1.159-.28 1.855-.011.937.363 1.948.774 2.747 1.38.832.632 1.461 1.497 1.584 2.737l.27 2.725a.75.75 0 0 1-1.492.148l-.27-2.725c-.074-.741-.426-1.255-.999-1.69-.607-.46-1.424-.805-2.382-1.176-.26-.101-.502-.085-.81.025a5 5 0 0 0-.527.238l-.175.09c-.143.075-.302.158-.452.229-.44.21-1.011.43-1.67.352-.664-.08-1.277-.442-1.867-1.092-.113-.087-.228-.107-.401-.059-.226.063-.526.246-.852.576-.65.655-1.193 1.67-1.338 2.531L6.246 10.2a.75.75 0 1 1-1.492-.148l.27-2.725.006-.045c.194-1.204.903-2.51 1.756-3.37.427-.431.945-.806 1.516-.965"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.132 11.532c-5.968-.955-11.887-.968-17.76 0a.75.75 0 0 1-.244-1.481c6.038-.995 12.12-.98 18.24 0a.75.75 0 1 1-.236 1.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAnonymousOutline;
