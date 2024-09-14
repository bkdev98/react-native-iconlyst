import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPoundBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.964 17.06h-4.728q.278-.34.55-.698a4.45 4.45 0 0 0 .692-3.092h2.328a1 1 0 1 0 0-2h-3.133c-.046-.065-.084-.134-.134-.197l-.003-.005c-.823-1.037-.664-2.576.356-3.43a2.475 2.475 0 0 1 3.484.314 1 1 0 1 0 1.533-1.284 4.48 4.48 0 0 0-6.301-.564A4.43 4.43 0 0 0 9.37 11.27H7.858a1 1 0 1 0 0 2h2.592c.174.66.08 1.368-.29 1.93a26 26 0 0 1-1.864 2.166 1 1 0 0 0 .72 1.694h6.948a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPoundBold;
