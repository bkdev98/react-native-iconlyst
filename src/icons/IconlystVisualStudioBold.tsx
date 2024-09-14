import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVisualStudioBold = ({
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
      d="m21.253 6.118-3.526-2.07a.5.5 0 0 0-.613.084L9.718 11.79 5.16 7.07a.5.5 0 0 0-.607-.085l-1.801 1.03a.5.5 0 0 0-.252.434v8.12c0 .18.096.345.252.434l1.801 1.03a.5.5 0 0 0 .607-.086l4.558-4.718 7.396 7.659a.505.505 0 0 0 .613.084l3.526-2.071a.5.5 0 0 0 .247-.431V6.55a.5.5 0 0 0-.247-.432"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVisualStudioBold;
