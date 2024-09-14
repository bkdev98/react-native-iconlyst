import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiIntentOutline = ({
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
      d="M12.018 21.89a3.55 3.55 0 0 1-3.55-3.55v-1.1a7.81 7.81 0 0 1-4.32-7 7.84 7.84 0 0 1 2.88-6.08 7.92 7.92 0 0 1 6.61-1.61c2.99.61 5.42 3.03 6.05 6.02.73 3.53-.99 7.1-4.13 8.68v1.09a3.55 3.55 0 0 1-3.55 3.55zm.01-18c-1.47 0-2.9.5-4.04 1.43-1.48 1.21-2.33 3-2.33 4.92 0 2.55 1.51 4.84 3.86 5.83.28.12.46.39.46.69v1.58c0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05v-1.57c0-.3.18-.57.46-.69 2.77-1.17 4.33-4.2 3.71-7.2-.5-2.41-2.46-4.36-4.88-4.85-.44-.09-.88-.13-1.32-.13z"
    />
    <Path
      fill={props.color}
      d="M14.818 17.527h-2.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.54c.41 0 .75.34.75.75s-.34.75-.75.75M11.968 14.117c-.12 0-.23-.02-.35-.06-.46-.15-.78-.58-.78-1.07v-1.42h-1.31a1.122 1.122 0 0 1-.91-1.78l2.52-3.47a1.129 1.129 0 0 1 2.04.66v1.42h1.31a1.122 1.122 0 0 1 .91 1.78l-2.52 3.46c-.22.3-.55.46-.91.46zm-1.69-4.05h1.32c.41 0 .75.34.75.75v1.02l1.4-1.93h-1.32c-.41 0-.75-.34-.75-.75v-1.02z"
    />
  </Svg>
);
export default IconlystAiIntentOutline;
