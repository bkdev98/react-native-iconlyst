import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScooterBold = ({
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
      d="M18.784 18.431a1.466 1.466 0 0 1 0-2.93c.809 0 1.466.657 1.466 1.465s-.657 1.465-1.466 1.465M5.22 18.428a1.464 1.464 0 1 1 0-2.93q.3 0 .57.12a1.465 1.465 0 0 1-.57 2.81M18.784 14a2.97 2.97 0 0 0-2.965 2.966c0 .196.022.387.058.572a2.5 2.5 0 0 1-.597.08H11.4v-4.32c0-.93-.44-1.81-1.18-2.37l-1.9-1.42 1.03-3.65c.04-.16.21-.29.39-.29h1.58c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75H9.74c-.86 0-1.61.57-1.84 1.39l-2.42 8.56c-.08-.02-.17-.02-.26-.02a2.97 2.97 0 0 0-2.97 2.97c0 1.63 1.33 2.96 2.97 2.96.8 0 1.52-.31 2.05-.84.05.02.11.03.17.03h7.84c.43 0 .85-.08 1.26-.23h.004a2.95 2.95 0 0 0 2.24 1.043 2.97 2.97 0 0 0 2.966-2.965A2.97 2.97 0 0 0 18.784 14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScooterBold;
