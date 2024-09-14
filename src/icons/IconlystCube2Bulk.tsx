import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M12.019 21.65H12a2.9 2.9 0 0 1-1.47-.397l-5.684-3.279a2.93 2.93 0 0 1-1.468-2.542v-6.56c0-1.053.564-2.027 1.471-2.545l5.683-3.278a2.906 2.906 0 0 1 2.936 0l5.684 3.28a2.93 2.93 0 0 1 1.468 2.542v6.561a2.93 2.93 0 0 1-1.47 2.543l-5.684 3.28c-.447.26-.947.392-1.449.395"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.001 21.65h.018q.37-.002.731-.098V12.79l7.811-4.51a2.94 2.94 0 0 0-.667-1.347L12 11.492 4.107 6.935c-.334.38-.565.845-.668 1.346l7.811 4.51v8.76q.37.099.751.099"
    />
    <Path
      fill={props.color}
      d="M12.75 6.151a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0zM14.97 14.04a.75.75 0 0 1 1.024-.275l1.731.999a.75.75 0 1 1-.75 1.299l-1.73-1a.75.75 0 0 1-.276-1.024M8.759 15.065a.75.75 0 1 0-.75-1.3l-1.73 1a.75.75 0 0 0 .749 1.299z"
    />
  </Svg>
);
export default IconlystCube2Bulk;
