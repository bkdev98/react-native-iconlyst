import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInfoCircleBold = ({
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
      d="M12 2c5.53 0 10 4.48 10 10s-4.47 10-10 10C6.48 22 2 17.52 2 12S6.48 2 12 2m0 12.93a.87.87 0 0 0-.87.87c0 .48.39.88.88.88.48 0 .87-.4.87-.88s-.39-.87-.88-.87m0-7.6c-.48 0-.88.4-.88.88v4.42c0 .48.4.87.88.87a.87.87 0 0 0 .87-.87V8.21a.88.88 0 0 0-.87-.88"
    />
  </Svg>
);
export default IconlystInfoCircleBold;
