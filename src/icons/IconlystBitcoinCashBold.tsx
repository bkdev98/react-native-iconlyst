import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCashBold = ({
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
      d="m11.91 9.085-2.102.83.596 1.51 2.105-.852a.803.803 0 0 0 .013-1.48.8.8 0 0 0-.611-.008M13.239 11.897l-2.284.924.844 2.137.15-.06q.007-.002.01-.006l.013-.002 2.115-.838c.604-.24.89-.903.653-1.51a1.14 1.14 0 0 0-.615-.633 1.14 1.14 0 0 0-.886-.012"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.144 15.177.117.297a.75.75 0 1 1-1.395.551l-.093-.235-.562.223.091.23a.75.75 0 1 1-1.395.552l-.091-.23-.71.281a.747.747 0 0 1-.974-.421.74.74 0 0 1 .284-.884L8.4 10.437a.74.74 0 0 1-.808-.452.75.75 0 0 1 .422-.973l.519-.205c.009-.004.015-.012.024-.015.01-.004.019-.002.029-.006l.135-.053-.094-.237a.75.75 0 0 1 1.395-.553l.095.238.565-.223-.097-.246a.75.75 0 1 1 1.397-.546l.145.37c.335-.012.671.043.989.179a2.28 2.28 0 0 1 1.228 1.27c.19.479.198.984.071 1.449.102.03.205.055.305.098a2.64 2.64 0 0 1 1.416 1.462 2.67 2.67 0 0 1-.992 3.183M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinCashBold;
