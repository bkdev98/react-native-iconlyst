import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicAiOutline = ({
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
      d="M6.4 14.053a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3m-4.15 2.65a4.15 4.15 0 1 1 8.3 0 4.15 4.15 0 0 1-8.3 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.566 3.308a.75.75 0 0 1 .287.59V9.17a.75.75 0 0 1-.536.72c-1.58.469-3.17.613-4.77.344v6.466a.75.75 0 0 1-1.5 0V4.03a.75.75 0 0 1 .89-.737c1.637.31 3.287.3 4.986-.122a.75.75 0 0 1 .643.137m-5.02 5.4c1.257.251 2.52.2 3.807-.113V4.822a12.9 12.9 0 0 1-3.806.085zM18.404 10.643a.75.75 0 0 1 .704.49l.1.273a3.01 3.01 0 0 0 1.78 1.781l.273.102a.75.75 0 0 1 0 1.406l-.273.101a3.01 3.01 0 0 0-1.78 1.782l-.1.273a.75.75 0 0 1-1.407 0l-.101-.273a3.01 3.01 0 0 0-1.779-1.782l-.273-.1a.75.75 0 0 1 0-1.407l.273-.101a3.01 3.01 0 0 0 1.779-1.782l.1-.274a.75.75 0 0 1 .704-.49m0 2.4a4.5 4.5 0 0 1-.948.949c.361.267.681.587.948.95.268-.363.587-.683.949-.95a4.5 4.5 0 0 1-.949-.95M14.2 16.2a.75.75 0 0 1 .717.533c.099.325.353.58.678.679a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .717-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMusicAiOutline;
