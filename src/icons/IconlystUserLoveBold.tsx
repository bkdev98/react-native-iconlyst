import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserLoveBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.352 17.915c.258.804 1.196 1.582 1.856 2.029.66-.45 1.623-1.24 1.867-2.022.163-.512.044-1.143-.494-1.318a.87.87 0 0 0-.775.134 1 1 0 0 1-1.197-.004.84.84 0 0 0-.763-.13c-.537.173-.655.804-.494 1.31m1.857 4.205a1 1 0 0 1-.478-.122c-.27-.147-2.65-1.493-3.284-3.475l-.001-.002c-.526-1.652.26-3.33 1.788-3.82a2.83 2.83 0 0 1 1.977.09 2.88 2.88 0 0 1 1.98-.091c1.533.496 2.317 2.174 1.792 3.822-.61 1.963-3.022 3.327-3.294 3.476a1 1 0 0 1-.48.122M10.438 3.57c-2.606 0-4.718 2.144-4.718 4.786 0 2.644 2.112 4.786 4.718 4.786S15.156 11 15.156 8.356c0-2.642-2.112-4.786-4.718-4.786M11.701 14.494H8.078c-2.667 0-4.923 2.29-4.923 4.994 0 .504 0 1.105.093 1.614q.007.053.013.102c.031.19.227.365.51.365h5.722a.78.78 0 0 0 .722-.488l2.213-5.51a.784.784 0 0 0-.727-1.077"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserLoveBold;
