import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBurgerTwoTone = ({
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
      d="M19.12 10.67c1.12 0 1.958-.912 1.689-1.855C19.853 5.476 16.373 3 12.227 3S4.6 5.476 3.644 8.815c-.269.943.57 1.854 1.69 1.854zM17.711 21H7.288a3.695 3.695 0 0 1-3.694-3.695c0-.285.23-.517.517-.517h16.778c.285 0 .517.232.517.517A3.695 3.695 0 0 1 17.71 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.594 13.669c.462.325.887.673 1.8.673 1.718 0 1.718-1.227 3.436-1.227 1.719 0 1.719 1.227 3.425 1.227 1.718 0 1.718-1.227 3.437-1.227s1.718 1.227 3.436 1.227c.864 0 1.299-.306 1.731-.613M12.308 6.387h-.082M16.077 7.799h-.081M8.545 7.799h-.081"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBurgerTwoTone;
