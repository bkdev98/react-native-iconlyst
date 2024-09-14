import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEnlargeExpandVerticalOutline = ({
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
      d="M3.75 12a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75M8.017 16.017a.75.75 0 0 1 1.06 0L12 18.94l2.923-2.924a.75.75 0 0 1 1.061 1.061l-3.453 3.454a.75.75 0 0 1-1.061 0l-3.453-3.454a.75.75 0 0 1 0-1.06M11.47 3.47a.75.75 0 0 1 1.06 0l3.454 3.453a.75.75 0 0 1-1.06 1.06L12 5.062 9.077 7.984a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEnlargeExpandVerticalOutline;
