import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard4Bold = ({
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
      fillRule="evenodd"
      d="M19.86 16.54a9.7 9.7 0 0 0-6.13-2.8V9.814a.75.75 0 1 0-1.5 0v3.926a9.7 9.7 0 0 0-6.13 2.8 8.2 8.2 0 0 1-1.34-3.79h1.696a.75.75 0 0 0 0-1.5H4.76a8.26 8.26 0 0 1 1.88-4.53l1.038 1.038c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28L7.7 5.66a8.26 8.26 0 0 1 4.53-1.88v1.47a.75.75 0 0 0 1.5 0V3.78c1.72.16 3.28.84 4.53 1.88l.001.001-1.037 1.037a.749.749 0 1 0 1.06 1.06l1.032-1.032.004.004a8.26 8.26 0 0 1 1.88 4.52h-1.47a.75.75 0 0 0 0 1.5h1.47c-.13 1.4-.61 2.69-1.34 3.79M22.731 12l-.001-.01a9.67 9.67 0 0 0-2.81-6.83l-.029-.029c-.007-.008-.009-.017-.016-.024-.009-.009-.022-.012-.031-.021a1 1 0 0 0-.084-.076 9.66 9.66 0 0 0-6.779-2.76h-.001a9.68 9.68 0 0 0-6.869 2.841c-.008.007-.017.009-.024.016s-.009.016-.016.024A9.68 9.68 0 0 0 3.23 12c0 2.31.81 4.43 2.15 6.1.02.03.04.06.06.08 0 .01.01.02.02.03.02.03.05.06.08.09a9.73 9.73 0 0 0 7.44 3.45c2.98 0 5.65-1.34 7.44-3.45.07-.07.12-.13.16-.2a9.7 9.7 0 0 0 2.14-5.95c0-.047.008-.093.009-.139z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard4Bold;
