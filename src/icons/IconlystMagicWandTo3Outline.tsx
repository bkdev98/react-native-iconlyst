import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMagicWandTo3Outline = ({
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
      d="M14.73 4.664a2.605 2.605 0 1 1 3.683 3.683L7.264 19.497a2.605 2.605 0 0 1-3.683-3.685zm2.623 1.06a1.105 1.105 0 0 0-1.563 0L4.641 16.873a1.105 1.105 0 0 0 1.563 1.563l11.149-11.15a1.105 1.105 0 0 0 0-1.562"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.09 6.303a.75.75 0 0 1 1.06 0l2.624 2.623a.75.75 0 1 1-1.061 1.061L13.09 7.364a.75.75 0 0 1 0-1.06M17.499 14.374a.75.75 0 0 1 .703.49l.114.309a3.5 3.5 0 0 0 2.069 2.071l.308.115a.75.75 0 0 1 0 1.406l-.308.114a3.5 3.5 0 0 0-2.069 2.072l-.114.309a.75.75 0 0 1-1.407 0l-.114-.31a3.5 3.5 0 0 0-2.068-2.07l-.309-.115a.75.75 0 0 1 0-1.406l.309-.115a3.5 3.5 0 0 0 2.068-2.071l.114-.31a.75.75 0 0 1 .704-.49m-1.24 3.688c.483.337.903.757 1.24 1.24a5 5 0 0 1 1.24-1.24 5 5 0 0 1-1.24-1.24 5 5 0 0 1-1.24 1.24M5.847 2.25a.75.75 0 0 1 .703.49l.089.24c.258.7.81 1.251 1.507 1.51l.24.089a.75.75 0 0 1 0 1.406l-.24.09c-.698.258-1.249.81-1.507 1.51l-.089.24a.75.75 0 0 1-1.407 0l-.089-.24a2.55 2.55 0 0 0-1.507-1.51l-.24-.09a.75.75 0 0 1 0-1.406l.24-.089a2.55 2.55 0 0 0 1.507-1.51l.09-.24a.75.75 0 0 1 .703-.49m-.682 3.032q.38.301.682.683.3-.382.682-.683a4 4 0 0 1-.682-.682q-.301.382-.682.682"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMagicWandTo3Outline;
