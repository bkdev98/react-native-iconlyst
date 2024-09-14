import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicTicketBroken = ({
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
      d="M11.667 11.732a1.937 1.937 0 1 1-1.84 1.334"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.604 13.669V7.854s.503 1.31 1.857 1.585"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 19.296h4.593c1.082 0 1.624 0 2.065-.128a3.24 3.24 0 0 0 2.212-2.213c.127-.442.127-.983.126-2.066v-.025c-.001-.215-.002-.325-.014-.391-.048-.242-.062-.265-.254-.42-.055-.044-.26-.153-.671-.37A1.89 1.89 0 0 1 19.291 12v-.058a1.9 1.9 0 0 1 .985-1.597c.44-.241.66-.362.714-.406.194-.162.199-.169.247-.417.013-.068.013-.185.013-.42 0-1.08 0-1.62-.127-2.06a3.24 3.24 0 0 0-2.214-2.213c-.44-.128-.98-.128-2.06-.128H7.656c-1.084 0-1.626 0-2.069.129a3.24 3.24 0 0 0-2.208 2.208c-.129.443-.129.985-.128 2.07 0 .232 0 .348.013.417.048.242.062.265.254.42.055.045.261.154.674.371a1.89 1.89 0 0 1 1.019 1.686 1.88 1.88 0 0 1-1.019 1.68l-.039.02c-.386.203-.582.306-.635.349-.192.155-.206.179-.254.42-.014.07-.014.186-.014.419 0 1.085 0 1.627.128 2.07a3.24 3.24 0 0 0 2.208 2.207c.443.13.985.13 2.07.13H8.86"
    />
  </Svg>
);
export default IconlystMusicTicketBroken;