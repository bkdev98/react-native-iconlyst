import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyOutline = ({
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
      fill={props.color}
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M9.026 9.999a.976.976 0 1 1-.002-1.952.976.976 0 0 1 .002 1.952M15.526 9.999a.976.976 0 1 1-.002-1.952.976.976 0 0 1 .002 1.952M12.25 16.251a2.753 2.753 0 0 1-2.63-2.962.75.75 0 0 1 1.5 0c0 .015.013 1.462 1.13 1.462 1.118 0 1.13-1.447 1.13-1.462a.75.75 0 0 1 1.5 0 2.75 2.75 0 0 1-2.63 2.962"
    />
  </Svg>
);
export default IconlystHappyOutline;
