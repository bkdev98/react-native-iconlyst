import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackLineBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5 12.378a1 1 0 0 0 1-1V6.715a1 1 0 0 0-2 0v4.663a1 1 0 0 0 1 1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.041 7.767H10.12l1.239-1.24a1 1 0 0 0-1.414-1.413L7.001 8.058c-.027.027-.04.064-.063.094-.058.072-.117.143-.153.229-.026.062-.027.13-.04.198-.012.063-.038.12-.038.188 0 .28.117.532.302.713l2.936 2.936a.997.997 0 0 0 1.414 0c.39-.391.39-1.024 0-1.415l-1.235-1.234h3.917A3.963 3.963 0 0 1 18 13.725a3.963 3.963 0 0 1-3.959 3.958H5a1 1 0 0 0 0 2h9.041A5.965 5.965 0 0 0 20 13.725a5.965 5.965 0 0 0-5.959-5.958"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackLineBold;
