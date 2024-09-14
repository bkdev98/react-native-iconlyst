import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimeCircleBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M7.909 20.17A9.25 9.25 0 0 1 3 12a9.25 9.25 0 0 1 9.25-9.25A9.25 9.25 0 0 1 21.5 12a9.25 9.25 0 0 1-9.25 9.25"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m15.682 14.942-3.77-2.25V7.847"
    />
  </Svg>
);
export default IconlystTimeCircleBrokensharp;
