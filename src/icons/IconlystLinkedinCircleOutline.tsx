import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkedinCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.218 10.324a.75.75 0 0 1 .75.75v4.417a.75.75 0 0 1-1.5 0v-4.417a.75.75 0 0 1 .75-.75M13.556 10.82c-.87 0-1.576.707-1.576 1.577v3.096a.75.75 0 0 1-1.5 0v-3.096a3.077 3.077 0 0 1 6.152 0v3.096a.75.75 0 1 1-1.5 0v-3.096c0-.87-.705-1.577-1.576-1.577M7.367 8.608a.85.85 0 1 1 1.7 0 .85.85 0 0 1-1.7 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinkedinCircleOutline;
