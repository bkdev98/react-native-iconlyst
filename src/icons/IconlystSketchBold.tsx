import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSketchBold = ({
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
      d="M14.026 9.59a.16.16 0 0 0-.132-.071h-3.786a.15.15 0 0 0-.128.069L8.613 11.59a.15.15 0 0 0 .013.192l3.38 3.71 3.367-3.71a.16.16 0 0 0 .01-.196z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.482 12.794-3.381 3.709a1.478 1.478 0 0 1-2.21-.006l-3.373-3.702a1.655 1.655 0 0 1-.145-2.048L8.74 8.745a1.65 1.65 0 0 1 1.368-.726h3.786c.548 0 1.061.27 1.371.726l1.362 2c.43.64.371 1.482-.145 2.049M12 3.009c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSketchBold;
