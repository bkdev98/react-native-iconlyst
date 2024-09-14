import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonaCoinTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.73 11.672c.241.448.376.945.395 1.453 0 2.175-2.52 3.938-5.625 3.938S6.875 15.3 6.875 13.125a3.38 3.38 0 0 1 1.387-2.58l.803-3.607 1.56 2.482.713-.139a6 6 0 0 1 2.35 0l.687.139 1.56-2.482.803 3.603c.412.297.752.684.993 1.131M10.288 11.14l-.645.527M14.713 11.14l.645.527"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.322 13 1.155 1.393 1.197-1.39"
    />
  </Svg>
);
export default IconlystMonaCoinTwoTone;
