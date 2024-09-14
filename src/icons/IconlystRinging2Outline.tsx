import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging2Outline = ({
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
      d="M17.578 18.233H6.922a2.973 2.973 0 0 1-2.69-4.238l.455-.966a4.4 4.4 0 0 0 .419-1.875V9.87a7.143 7.143 0 1 1 14.285 0v1.282c.001.65.145 1.29.42 1.878l.454.964a2.973 2.973 0 0 1-2.69 4.238zM12.25 4.228a5.65 5.65 0 0 0-5.643 5.643v1.283c-.001.87-.193 1.728-.561 2.515l-.455.965a1.473 1.473 0 0 0 1.332 2.1h10.656a1.47 1.47 0 0 0 1.33-2.1l-.452-.964a5.96 5.96 0 0 1-.563-2.515V9.871a5.65 5.65 0 0 0-5.644-5.643"
    />
    <Path
      fill={props.color}
      d="M12.249 21.752a3.77 3.77 0 0 1-3.769-3.768.75.75 0 0 1 1.5 0 2.268 2.268 0 1 0 4.537 0 .75.75 0 0 1 1.5 0 3.77 3.77 0 0 1-3.768 3.768M4.318 6.53a.75.75 0 0 1-.681-1.069 8.3 8.3 0 0 1 2.438-3.055.75.75 0 1 1 .924 1.182 6.8 6.8 0 0 0-2 2.5.75.75 0 0 1-.681.441M20.183 6.53a.75.75 0 0 1-.682-.438 6.8 6.8 0 0 0-2-2.5.75.75 0 1 1 .924-1.182 8.3 8.3 0 0 1 2.437 3.054.75.75 0 0 1-.679 1.065"
    />
  </Svg>
);
export default IconlystRinging2Outline;
