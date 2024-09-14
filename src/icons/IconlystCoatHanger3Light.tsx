import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger3Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.699 11.974-5.3 2.243A2.29 2.29 0 0 0 3 16.327v.086a2.29 2.29 0 0 0 2.29 2.29H18.71a2.29 2.29 0 0 0 .876-4.406l-7.567-3.133.002-.486c0-.513.325-.959.803-1.146a2.2 2.2 0 0 0 1.305-2.672 2.16 2.16 0 0 0-1.507-1.484 2.198 2.198 0 0 0-2.793 2.113"
    />
  </Svg>
);
export default IconlystCoatHanger3Light;
