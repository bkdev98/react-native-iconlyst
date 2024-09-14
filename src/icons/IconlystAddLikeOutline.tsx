import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddLikeOutline = ({
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
      fillRule="evenodd"
      d="M12.227 3.75A8.25 8.25 0 0 0 3.977 12a8.25 8.25 0 0 0 9.692 8.124.75.75 0 0 1 .262 1.477A9.75 9.75 0 0 1 2.477 12a9.75 9.75 0 0 1 9.75-9.75c5.384 0 9.75 4.365 9.75 9.75 0 .9-.123 1.774-.353 2.604a.75.75 0 0 1-1.445-.401A8.25 8.25 0 0 0 12.227 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.384 9.676c-.836.27-1.249 1.223-.927 2.23.26.81.987 1.591 1.748 2.21a11 11 0 0 0 1.02.732l.05-.032c.26-.167.611-.41.98-.71.766-.622 1.489-1.402 1.739-2.196v-.004c.323-1.004-.09-1.958-.927-2.23a1.56 1.56 0 0 0-1.394.238.75.75 0 0 1-.897-.002c-.4-.3-.918-.387-1.392-.236m1.842 6.046-.36.659-.003-.002-.009-.005-.029-.016-.101-.059a12.323 12.323 0 0 1-1.465-1.02c-.817-.663-1.831-1.675-2.23-2.914v-.002c-.496-1.549.047-3.518 1.895-4.115h.002a3.04 3.04 0 0 1 2.302.185 3.06 3.06 0 0 1 2.291-.186l.006.001c1.846.596 2.395 2.562 1.899 4.114-.388 1.231-1.406 2.244-2.222 2.908a12.6 12.6 0 0 1-1.573 1.087l-.03.016-.008.005-.003.001zm0 0 .361.658a.75.75 0 0 1-.72 0zM18.101 15.792a.75.75 0 0 1 .75.75v1.024h1.025a.75.75 0 1 1 0 1.5H18.85v1.023a.75.75 0 0 1-1.5 0v-1.023h-1.025a.75.75 0 0 1 0-1.5h1.025v-1.024a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddLikeOutline;
