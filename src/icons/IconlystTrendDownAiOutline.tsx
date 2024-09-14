import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendDownAiOutline = ({
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
      d="M20.999 14.468a.75.75 0 0 1 .75.75l.001 4.909a.75.75 0 0 1-.75.75h-4.91a.75.75 0 1 1 0-1.5h4.16v-4.159a.75.75 0 0 1 .749-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.47 9.777a.75.75 0 0 1 1.06 0l5.607 5.607 3.56-3.56a.75.75 0 0 1 1.06 0l7.773 7.772a.75.75 0 0 1-1.06 1.06l-7.243-7.242-3.56 3.56a.75.75 0 0 1-1.06 0L2.47 10.839a.75.75 0 0 1 0-1.06M11.14 9.822a.75.75 0 0 1-.703-.49l-.101-.273a3.01 3.01 0 0 0-1.779-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.779-1.782l.101-.274a.75.75 0 0 1 1.407 0l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.779 1.782l-.101.273a.75.75 0 0 1-.703.49m.95-3.35a4.5 4.5 0 0 1-.95-.949 4.5 4.5 0 0 1-.948.95c.361.267.681.587.948.949.268-.362.587-.682.95-.95M17.696 10.409a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 1.435 0c.099.327.353.581.678.68a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-.718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendDownAiOutline;
