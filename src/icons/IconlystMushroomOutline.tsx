import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMushroomOutline = ({
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
      d="M7.685 4.65c-1.26.63-2.049 1.532-2.049 2.79 0 .565.105 1.028.294 1.355.174.303.432.516.844.604 3.57.758 6.89.786 10.465.001.709-.156 1.125-.792 1.125-1.869 0-1.264-.852-2.196-2.231-2.852-1.374-.653-3.089-.929-4.34-.929-1.234 0-2.84.269-4.108.9m-.669-1.342c1.526-.76 3.375-1.058 4.777-1.058 1.42 0 3.365.305 4.984 1.075 1.613.767 3.087 2.101 3.087 4.206 0 1.4-.593 2.959-2.303 3.334-3.796.833-7.33.802-11.098.001A2.7 2.7 0 0 1 4.63 9.544c-.363-.63-.494-1.38-.494-2.104 0-2.05 1.347-3.367 2.88-4.132"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.59 9.883a.75.75 0 0 1 .845.64c.05.359.173.895.33 1.577l.158.687c.222.981.464 2.132.596 3.252.13 1.107.162 2.258-.086 3.216-.256.986-.847 1.871-1.995 2.161-1.74.44-3.19.452-4.946-.003-1.132-.294-1.714-1.18-1.974-2.157-.253-.953-.239-2.101-.127-3.207.112-1.12.333-2.269.535-3.25l.138-.66c.146-.694.26-1.238.302-1.6a.75.75 0 0 1 1.49.174c-.05.437-.186 1.08-.336 1.79l-.125.6c-.2.972-.407 2.058-.512 3.096-.106 1.052-.098 1.983.085 2.671.176.665.474.98.9 1.09 1.504.39 2.698.382 4.202.002.445-.112.74-.43.91-1.084.178-.683.173-1.612.05-2.664-.122-1.037-.35-2.124-.57-3.096l-.143-.62c-.162-.703-.309-1.338-.368-1.77a.75.75 0 0 1 .64-.845M11.149 6.355c-.925 0-1.854.398-2.173.584a.75.75 0 1 1-.756-1.295c.466-.272 1.656-.79 2.929-.79a.75.75 0 1 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMushroomOutline;