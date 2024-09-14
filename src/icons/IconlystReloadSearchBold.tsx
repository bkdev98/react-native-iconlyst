import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadSearchBold = ({
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
      d="M21.002 11.265a.75.75 0 0 0-.75.75 8.24 8.24 0 0 1-3.583 6.782 8.2 8.2 0 0 1-6.17 1.321 8.2 8.2 0 0 1-5.297-3.438 8.2 8.2 0 0 1-1.312-6.174 8.18 8.18 0 0 1 3.433-5.293 8.22 8.22 0 0 1 9.128-.162l-.817.923a.75.75 0 0 0 .485 1.243l3.346.345a.754.754 0 0 0 .633-.242.75.75 0 0 0 .18-.653l-.68-3.356a.749.749 0 0 0-1.297-.349l-.847.957a9.7 9.7 0 0 0-10.98.058 9.67 9.67 0 0 0-4.059 6.257 9.68 9.68 0 0 0 1.551 7.296 9.68 9.68 0 0 0 6.26 4.062 9.672 9.672 0 0 0 7.293-1.559 9.74 9.74 0 0 0 4.232-8.017.75.75 0 0 0-.749-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.12 7.266a3.953 3.953 0 0 0-3.95 3.947 3.957 3.957 0 0 0 3.95 3.955 3.957 3.957 0 0 0 3.95-3.955 3.953 3.953 0 0 0-3.95-3.947M15.28 16.608a.747.747 0 0 0 1.061-.002.75.75 0 0 0 0-1.06l-.91-.908a.75.75 0 0 0-1.059 1.063z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadSearchBold;
