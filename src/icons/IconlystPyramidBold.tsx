import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPyramidBold = ({
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
      d="M11.25 3.567a1.9 1.9 0 0 0-.85.687l-7.576 11.37a1.923 1.923 0 0 0 .74 2.786l7.142 3.568c.174.088.358.148.544.198zM21.176 15.625 13.599 4.253a1.9 1.9 0 0 0-.85-.686v18.609c.186-.05.37-.11.543-.197l7.144-3.57a1.917 1.917 0 0 0 .74-2.784"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPyramidBold;
