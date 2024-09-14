import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesCloseTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.777 21.99a8.97 8.97 0 0 0 6.92-3.218c2.722-3.228 2.807-8.072.194-11.388a8.988 8.988 0 0 0-13.448-.811C3.692 9.332 3.098 13.42 4.639 16.764c.128.321.625 1.204.959 1.784.19.33.17.737-.049 1.047s-.498.707-.714 1.033c-.389.583.024 1.363.722 1.363h.541c2.375-.002 5.851-.003 6.679 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.84 10.911-4.081 4.095m4.086.005-4.087-4.1"
    />
  </Svg>
);
export default IconlystMessagesCloseTwoTone;
