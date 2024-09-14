import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpAiOutline = ({
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
      d="M15.341 4.62a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 .75.75v4.91a.75.75 0 0 1-1.5 0V5.37h-4.159a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.53 4.09a.75.75 0 0 1 0 1.06l-7.773 7.773a.75.75 0 0 1-1.06 0l-3.56-3.561-5.607 5.606a.75.75 0 0 1-1.06-1.06L8.606 7.77a.75.75 0 0 1 1.06 0l3.56 3.56L20.47 4.09a.75.75 0 0 1 1.06 0M17.713 19.544a.75.75 0 0 0 .703-.49l.101-.274A3.01 3.01 0 0 1 20.297 17l.272-.101a.75.75 0 0 0 0-1.407l-.273-.101a3.01 3.01 0 0 1-1.779-1.782l-.1-.273a.75.75 0 0 0-1.408 0l-.1.273a3.01 3.01 0 0 1-1.78 1.782l-.272.101a.75.75 0 0 0 0 1.407l.273.1a3.01 3.01 0 0 1 1.778 1.782l.101.274a.75.75 0 0 0 .704.49m-.949-3.35c.362-.267.682-.587.949-.95.267.363.587.683.948.95a4.5 4.5 0 0 0-.948.95 4.5 4.5 0 0 0-.949-.95M11.157 20.13a.75.75 0 0 0 .718-.531 1.02 1.02 0 0 1 .677-.68.75.75 0 0 0 0-1.434 1.02 1.02 0 0 1-.677-.68.75.75 0 0 0-1.436 0 1.02 1.02 0 0 1-.677.68.75.75 0 0 0 0 1.435c.324.098.578.353.677.679a.75.75 0 0 0 .718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendUpAiOutline;
