import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateAiDashOutline = ({
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
      d="M5.97 5.52a.75.75 0 0 1 .093 1.057c-.33.392-.618.8-.866 1.232a.75.75 0 0 1-1.3-.746 10 10 0 0 1 1.017-1.451.75.75 0 0 1 1.057-.092M3.648 14.04a.75.75 0 0 1 .954.464c.182.527.429 1.031.715 1.5a.75.75 0 1 1-1.28.781 9.3 9.3 0 0 1-.853-1.792.75.75 0 0 1 .464-.954M10.356 19.688a.8.8 0 0 1 .232.013 7.5 7.5 0 0 0 1.787.16.75.75 0 0 1 .04 1.5 9 9 0 0 1-2.082-.18.75.75 0 0 1 .014-1.492zM9.963 3.262a.75.75 0 0 1-.462.955 7.5 7.5 0 0 0-1.497.712.75.75 0 1 1-.792-1.274A9 9 0 0 1 9.009 2.8a.75.75 0 0 1 .954.462M17.42 18.938a.75.75 0 0 1-.254 1.03 9.6 9.6 0 0 1-1.789.85.75.75 0 0 1-.492-1.418 8 8 0 0 0 1.506-.717.75.75 0 0 1 1.03.255M13.796 3.914a7.4 7.4 0 0 0-1.784-.16.75.75 0 1 1-.043-1.5c.72-.02 1.44.042 2.137.192a9.2 9.2 0 0 1 2.823 1.065c.52.291 1.014.63 1.468 1.022a9.4 9.4 0 0 1 1.952 2.287c.35.564.634 1.167.853 1.8q.252.707.391 1.46v.002q.138.75.153 1.503a8.7 8.7 0 0 1-.18 2.064l-.01.064a9.1 9.1 0 0 1-1.066 2.816 8.4 8.4 0 0 1-1.026 1.474.75.75 0 1 1-1.136-.98 7 7 0 0 0 .86-1.238c.415-.716.718-1.49.884-2.3a1 1 0 0 1 .013-.085c.125-.578.18-1.16.162-1.773v-.01a7.9 7.9 0 0 0-.459-2.495l-.003-.008a7.4 7.4 0 0 0-.712-1.505l-.005-.008a7.9 7.9 0 0 0-1.644-1.926l-.006-.005a7.3 7.3 0 0 0-1.226-.852l-.01-.006a7.7 7.7 0 0 0-2.371-.895zM5.919 18.021a.75.75 0 0 1 1.057-.078c.374.322.785.606 1.214.844a.75.75 0 0 1-.728 1.312 8.8 8.8 0 0 1-1.465-1.02.75.75 0 0 1-.078-1.058M3.723 9.303a.75.75 0 0 1 .576.891 7.5 7.5 0 0 0-.159 1.794.75.75 0 1 1-1.5.044 9 9 0 0 1 .192-2.153.75.75 0 0 1 .891-.576M10.054 8.03a.75.75 0 0 1 .704.49l.1.273a3.01 3.01 0 0 0 1.78 1.782l.273.1a.75.75 0 0 1 0 1.407l-.273.101a3.01 3.01 0 0 0-1.78 1.782l-.1.273a.75.75 0 0 1-1.407 0l-.101-.273a3.01 3.01 0 0 0-1.78-1.782l-.272-.1a.75.75 0 0 1 0-1.407l.273-.101A3.01 3.01 0 0 0 9.25 8.793l.1-.274a.75.75 0 0 1 .704-.49m-.948 3.349c.361.267.681.587.948.95.267-.363.587-.683.949-.95a4.5 4.5 0 0 1-.949-.95 4.5 4.5 0 0 1-.948.95"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.365 12.114a.75.75 0 0 1 .717.532c.1.325.354.58.678.679a.75.75 0 0 1 0 1.435 1.02 1.02 0 0 0-.678.679.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .718-.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGenerateAiDashOutline;