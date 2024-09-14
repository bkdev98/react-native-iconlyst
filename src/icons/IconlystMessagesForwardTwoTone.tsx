import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesForwardTwoTone = ({
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
      d="M12.476 21.774a8.97 8.97 0 0 0 6.92-3.22c2.722-3.227 2.807-8.07.194-11.386a8.988 8.988 0 0 0-13.448-.812c-2.75 2.76-3.345 6.848-1.804 10.192.129.32.626 1.203.96 1.783.189.33.17.737-.05 1.047s-.497.708-.714 1.034c-.388.582.024 1.363.722 1.362h.542c2.374-.002 5.85-.003 6.678 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.037 12.744H8.96m7.076 0-2.855-2.851m2.855 2.851-2.855 2.852"
    />
  </Svg>
);
export default IconlystMessagesForwardTwoTone;
