import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesLockTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.777 21.207a8.97 8.97 0 0 0 6.92-3.219c2.722-3.227 2.807-8.071.194-11.387A8.988 8.988 0 0 0 6.443 5.79c-2.751 2.76-3.345 6.848-1.804 10.192.128.321.625 1.203.959 1.784.19.33.17.736-.049 1.047s-.498.707-.714 1.033c-.389.583.024 1.363.722 1.362h.541c2.375 0 5.851-.002 6.679 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.317 15.898h2.963c.812 0 1.47-.661 1.47-1.476v-1.67c0-.814-.658-1.475-1.47-1.475h-2.963c-.813 0-1.471.66-1.471 1.476v1.67c0 .814.658 1.475 1.471 1.475"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.567 11.306V10.21a1.77 1.77 0 0 0-1.79-1.754 1.773 1.773 0 0 0-1.748 1.745v1.106"
    />
  </Svg>
);
export default IconlystMessagesLockTwoTone;
