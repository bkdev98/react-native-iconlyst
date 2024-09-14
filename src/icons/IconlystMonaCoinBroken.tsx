import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonaCoinBroken = ({
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
      d="m14.375 9.42 1.56-2.482.803 3.603a3.33 3.33 0 0 1 1.387 2.584c0 2.175-2.52 3.938-5.625 3.938S6.875 15.3 6.875 13.125a3.38 3.38 0 0 1 1.387-2.58l.803-3.607 1.56 2.482.713-.139M10.288 11.14l-.645.527M15.358 11.668l-.645-.527"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.322 13 1.155 1.393 1.197-1.39"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21a9 9 0 1 1 4.172-1.023"
    />
  </Svg>
);
export default IconlystMonaCoinBroken;
