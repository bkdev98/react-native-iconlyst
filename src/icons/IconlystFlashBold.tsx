import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashBold = ({
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
      d="M19.915 10.105a1.49 1.49 0 0 0-1.33-.814h-4.979V4c0-.663-.406-1.224-1.034-1.428a1.47 1.47 0 0 0-1.67.544l-6.696 9.22a1.492 1.492 0 0 0 1.21 2.373h4.977V20c0 .663.406 1.223 1.034 1.427q.238.077.475.077c.466 0 .907-.22 1.197-.62l6.695-9.22a1.49 1.49 0 0 0 .121-1.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashBold;
