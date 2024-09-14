import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoffeeBeanOutline = ({
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
      d="M9.435 21.254c-1.92 0-3.59-.65-4.81-1.88-1.55-1.54-2.17-3.79-1.75-6.32.39-2.35 1.66-4.7 3.57-6.61s4.26-3.18 6.61-3.57c2.53-.42 4.77.2 6.32 1.75 1.55 1.54 2.17 3.79 1.75 6.32-.39 2.35-1.66 4.7-3.57 6.61s-4.26 3.18-6.61 3.57c-.5.08-1 .13-1.5.13zm5.12-17c-.41 0-.82.04-1.26.11-2.05.34-4.11 1.46-5.8 3.15s-2.81 3.75-3.15 5.8c-.34 2.04.13 3.82 1.33 5.01.94.94 2.24 1.44 3.75 1.44.42 0 .84-.04 1.26-.11 2.05-.34 4.11-1.46 5.8-3.15s2.81-3.75 3.15-5.8c.34-2.04-.13-3.82-1.33-5.01-.94-.94-2.25-1.43-3.75-1.43z"
    />
    <Path
      fill={props.color}
      d="M5.645 19.824c-.34 0-.64-.23-.73-.57-.1-.4.15-.81.55-.91 2.19-.55 4.97-2.04 5.78-6.07.53-2.67 1.79-4.81 3.74-6.34.95-.74 2-1.31 3.13-1.71.39-.13.82.07.96.46s-.07.82-.46.96c-.98.34-1.88.84-2.7 1.47-1.66 1.31-2.73 3.15-3.19 5.46-1.01 5.05-4.75 6.7-6.89 7.23-.06.02-.12.02-.18.02z"
    />
  </Svg>
);
export default IconlystCoffeeBeanOutline;
