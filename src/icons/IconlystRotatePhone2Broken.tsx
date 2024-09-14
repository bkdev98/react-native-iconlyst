import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhone2Broken = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.724 17.324 1.837 1.83L10.715 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.505 19.138c-4.974 0-9-1.67-9-3.713 0-1.075 1.105-2.042 2.863-2.716M18.709 12.738c1.71.674 2.785 1.632 2.785 2.687 0 1.5-2.172 2.8-5.29 3.383"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.706 15.206 18.705 6.5a3.5 3.5 0 0 0-3.5-3.5h-2.668M9.87 3a3.5 3.5 0 0 0-3.5 3.5v8.707M11.191 6.568h2.693"
    />
  </Svg>
);
export default IconlystRotatePhone2Broken;