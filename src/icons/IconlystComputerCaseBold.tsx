import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCaseBold = ({
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
      d="M14.356 8.43h-4.71a.75.75 0 0 1 0-1.5h4.71a.75.75 0 0 1 0 1.5m0 3.513h-4.71a.75.75 0 0 1 0-1.5h4.71a.75.75 0 0 1 0 1.5m-2.357 6.417a.982.982 0 0 1 0-1.962.982.982 0 0 1 0 1.962M14.825 2.5H9.174a3.51 3.51 0 0 0-3.506 3.507v11.987A3.51 3.51 0 0 0 9.174 21.5h5.651a3.51 3.51 0 0 0 3.507-3.506V6.007A3.51 3.51 0 0 0 14.825 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystComputerCaseBold;
