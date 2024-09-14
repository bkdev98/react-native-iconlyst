import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadSignBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m19.929 13.615-1.506-1.34a1.53 1.53 0 0 0-1.167-.37l-4.397.504-.225-1.979 4.72-.54a1.5 1.5 0 0 0 1.322-1.66l-.342-2.985c-.093-.822-.844-1.402-1.66-1.32l-4.72.538-.17-1.49a.75.75 0 1 0-1.49.17l.17 1.49-4.403.502c-.422.05-.805.278-1.052.624v.001L3.845 7.405a1.497 1.497 0 0 0 .227 1.986l1.506 1.342a1.51 1.51 0 0 0 1.166.37l4.4-.502.224 1.978-4.723.54a1.5 1.5 0 0 0-1.004.558 1.5 1.5 0 0 0-.316 1.103l.34 2.985c.047.398.244.755.558 1.003a1.5 1.5 0 0 0 1.104.317l4.72-.54.283 2.482a.75.75 0 1 0 1.49-.17l-.282-2.482 4.4-.503a1.5 1.5 0 0 0 1.054-.625l1.164-1.646a1.5 1.5 0 0 0-.227-1.987"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRoadSignBold;
