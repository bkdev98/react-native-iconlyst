import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchEditOutline = ({
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
      d="m18.164 3.9-.542.596 1.457 1.457.594-.654a.47.47 0 0 0-.026-.666l-.819-.758m-.758 3.19-1.457-1.458-1.948 2.145a1.4 1.4 0 0 0-.342.772l-.1.919a.246.246 0 0 0 .286.269l.89-.149c.31-.051.593-.208.804-.443l.003-.003zm-1.962-3.133a.8.8 0 0 0-.153.169l-2.403 2.645-.005.005a2.9 2.9 0 0 0-.716 1.612l-.1.918a1.746 1.746 0 0 0 2.025 1.91l.89-.148a2.9 2.9 0 0 0 1.672-.92l.002-.001 3.456-3.807c.737-.8.688-2.044-.11-2.783l-.819-.757a1.97 1.97 0 0 0-2.786.108zm-4.496-.547a.75.75 0 0 1-.652.837 7.474 7.474 0 1 0 5.996 12.91l.054-.049a7.45 7.45 0 0 0 2.291-4.47.75.75 0 0 1 1.488.194 8.94 8.94 0 0 1-2.244 4.851l2.818 2.81a.75.75 0 0 1-1.06 1.063l-2.854-2.848a8.973 8.973 0 0 1-14.531-7.045 8.974 8.974 0 0 1 7.857-8.904.75.75 0 0 1 .837.651"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchEditOutline;
