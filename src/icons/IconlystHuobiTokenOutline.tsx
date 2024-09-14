import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHuobiTokenOutline = ({
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
      d="M10.72 21.672q-.245 0-.487-.043c-2.3-.394-3.727-2.679-4.108-3.37a6.72 6.72 0 0 1 .8-7.547 25.5 25.5 0 0 0 4.31-7.912.75.75 0 0 1 1.1-.448 6.3 6.3 0 0 1 2.536 6.192 9.2 9.2 0 0 1-2.192 3.986c-1.154 1.494-2.347 3.04-2.215 4.7.084.799.329 1.572.718 2.274.136.253.565 1.006.566 1.007a.75.75 0 0 1-.431 1.087 2 2 0 0 1-.596.074M12.3 4.325a28.8 28.8 0 0 1-4.205 7.321 5.25 5.25 0 0 0-.657 5.888 5.94 5.94 0 0 0 2.245 2.34 7.4 7.4 0 0 1-.716-2.512c-.18-2.25 1.255-4.109 2.52-5.748a8.3 8.3 0 0 0 1.896-3.287A4.9 4.9 0 0 0 12.3 4.325"
    />
    <Path
      fill={props.color}
      d="M14.724 21.747a.75.75 0 0 1-.51-.2l-.079-.067c-3.66-3.055-2.443-5.807-1.391-7.176 2.369-3.137 2.673-4.053 2.685-4.09a.77.77 0 0 1 .941-.512c.126.036.24.105.332.2 1.815 1.96 2.639 3.95 2.45 5.913-.2 2.05-1.48 3.954-3.811 5.658l-.14.1a.75.75 0 0 1-.477.174m1.591-9.979a37 37 0 0 1-2.378 3.445c-1.234 1.606-.965 3.185.822 4.821 1.778-1.375 2.753-2.842 2.9-4.363a5.6 5.6 0 0 0-1.344-3.903"
    />
  </Svg>
);
export default IconlystHuobiTokenOutline;
