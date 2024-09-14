import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger6Broken = ({
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
      d="M9.868 7.57a2.158 2.158 0 0 1 2.742-2.075 2.12 2.12 0 0 1 1.48 1.457 2.16 2.16 0 0 1-1.281 2.625 1.22 1.22 0 0 0-.79 1.125l-.002.478 7.432 3.076a2.25 2.25 0 0 1-.86 4.327h-3.295M9.74 11.975l-5.206 2.202a2.25 2.25 0 0 0-1.373 2.072v.085a2.25 2.25 0 0 0 2.25 2.25H11M14.264 7.56H21m-18 0h4.312"
    />
  </Svg>
);
export default IconlystCoatHanger6Broken;
