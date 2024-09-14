import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesHappyBroken = ({
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
      d="M9.365 14.565a3.645 3.645 0 0 0 6.676 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.443 6.574C3.692 9.333 3.098 13.42 4.639 16.765c.128.321.625 1.203.959 1.784.19.33.17.737-.049 1.047s-.498.707-.714 1.033c-.389.583.024 1.363.722 1.362h.541c2.375 0 5.851-.002 6.679 0a8.97 8.97 0 0 0 6.92-3.218c2.722-3.228 2.807-8.072.194-11.388A8.99 8.99 0 0 0 9.225 4.673"
    />
  </Svg>
);
export default IconlystMessagesHappyBroken;
