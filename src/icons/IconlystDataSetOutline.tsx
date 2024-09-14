import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDataSetOutline = ({
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
      d="M10.499 2.586a3.52 3.52 0 0 1 3.002 0l5.873 2.775a2.032 2.032 0 0 1 .068 3.66l-5.828 3.016a3.52 3.52 0 0 1-3.228 0L4.558 9.022a2.032 2.032 0 0 1 .068-3.661zm2.361 1.356a2.02 2.02 0 0 0-1.72 0L5.267 6.717a.533.533 0 0 0-.02.973l5.829 3.015a2.02 2.02 0 0 0 1.848 0l5.829-3.015a.533.533 0 0 0-.02-.973z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.97 9.272a.75.75 0 0 1-.358.998l-2.345 1.108a.533.533 0 0 0-.02.973l-.345.666.345-.666 5.829 3.015a2.02 2.02 0 0 0 1.848 0l5.829-3.015a.533.533 0 0 0-.02-.973l-2.345-1.108a.75.75 0 0 1 .641-1.356l2.345 1.108a2.032 2.032 0 0 1 .068 3.661l-5.828 3.015a3.52 3.52 0 0 1-3.228 0l-5.828-3.015a2.032 2.032 0 0 1 .068-3.661l2.345-1.108a.75.75 0 0 1 .998.358"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.97 13.932a.75.75 0 0 1-.358.998l-2.345 1.108a.533.533 0 0 0-.02.973l-.345.666.345-.666 5.829 3.015a2.02 2.02 0 0 0 1.848 0l5.829-3.015a.533.533 0 0 0-.02-.973l-2.345-1.108a.75.75 0 0 1 .641-1.356l2.345 1.108a2.032 2.032 0 0 1 .068 3.661l-5.828 3.015a3.52 3.52 0 0 1-3.228 0l-5.828-3.015a2.032 2.032 0 0 1 .068-3.661l2.345-1.108a.75.75 0 0 1 .998.358"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.122 7.539a.75.75 0 0 1 1.012-.317l1.508.79a.75.75 0 0 1 .402.664V20.68a.75.75 0 0 1-1.5 0V9.13l-1.106-.579a.75.75 0 0 1-.316-1.012"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.924 7.051.001-.003zm.003-.009c.008-.02.038-.07.139-.136.155-.103.412-.191.735-.191.322 0 .58.088.735.19.101.068.13.117.138.137-.008.02-.037.07-.138.136-.155.103-.413.191-.735.191-.323 0-.58-.088-.735-.19-.101-.068-.13-.118-.139-.137m1.75.009v-.003zm0-.015v-.003zm-1.752 0v-.003zm-.688-1.38c.433-.288.988-.441 1.564-.441.575 0 1.13.153 1.563.44.428.284.812.759.812 1.387s-.384 1.103-.812 1.387c-.433.287-.988.44-1.563.44-.576 0-1.13-.153-1.564-.44-.428-.284-.812-.759-.812-1.387s.384-1.103.812-1.387"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDataSetOutline;
