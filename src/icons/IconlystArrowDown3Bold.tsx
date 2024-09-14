import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDown3Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M17.41 12.141a.72.72 0 0 0-.627-.38h-4.066V3.735A.726.726 0 0 0 12 3a.726.726 0 0 0-.717.734v8.028H7.217a.71.71 0 0 0-.627.38.75.75 0 0 0 .02.746l4.783 7.77c.132.213.36.342.607.342s.475-.13.607-.343l4.783-7.77a.76.76 0 0 0 .02-.746"
    />
  </Svg>
);
export default IconlystArrowDown3Bold;
