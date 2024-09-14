import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar8Lightsharp = ({
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
      strokeWidth={1.5}
      d="m12.25 2.75 1.767 6.19 6.244-1.565L15.783 12l4.478 4.625-6.244-1.565-1.767 6.19-1.767-6.19-6.244 1.565L8.717 12 4.239 7.375l6.244 1.565z"
    />
  </Svg>
);
export default IconlystStar8Lightsharp;
