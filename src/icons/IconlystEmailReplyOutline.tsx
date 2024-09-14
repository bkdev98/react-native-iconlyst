import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailReplyOutline = ({
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
      d="M7.817 20.837a5.05 5.05 0 0 1-3.642-1.481 5.96 5.96 0 0 1-1.675-4.28V8.9a5.44 5.44 0 0 1 5.332-5.763h8.836A5.44 5.44 0 0 1 22 8.9v1.677a.75.75 0 1 1-1.5 0V8.9c0-2.47-1.611-4.263-3.832-4.263H7.832C5.612 4.637 4 6.43 4 8.9v6.177a4.47 4.47 0 0 0 1.234 3.213 3.58 3.58 0 0 0 2.586 1.043h4.348a.75.75 0 1 1 0 1.5H7.817z"
    />
    <Path
      fill={props.color}
      d="M16.762 20.862a.75.75 0 0 1-.531-.219l-1.8-1.8a.75.75 0 0 1 0-1.06l1.8-1.8a.75.75 0 0 1 1.07-.01.75.75 0 0 1-.01 1.07l-1.27 1.27 1.27 1.27a.75.75 0 0 1-.53 1.28"
    />
    <Path
      fill={props.color}
      d="M19.449 19.062h-4.49a.75.75 0 1 1 0-1.5h4.49a1.05 1.05 0 1 0 0-2.1h-.9a.75.75 0 1 1 0-1.5h.9a2.55 2.55 0 0 1 0 5.1M12.272 13.606a2.8 2.8 0 0 1-1.75-.614L6.483 9.737a.75.75 0 1 1 .942-1.168l4.032 3.252a1.315 1.315 0 0 0 1.64 0l3.988-3.246a.75.75 0 1 1 .947 1.163l-4 3.252c-.5.398-1.121.615-1.76.616"
    />
  </Svg>
);
export default IconlystEmailReplyOutline;
