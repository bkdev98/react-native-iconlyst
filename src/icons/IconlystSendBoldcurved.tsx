import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendBoldcurved = ({
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
      d="M21.716 2.741a.5.5 0 0 0-.206-.207c-2.086-1.11-14.565 2.758-17.793 4.62C2.876 7.64 2.5 8.21 2.604 8.845c.297 1.842 5.26 3.238 7.953 3.863l5.057-5.056a.75.75 0 1 1 1.06 1.061l-5.105 5.104c.64 2.721 2.022 7.536 3.835 7.828q.102.017.203.017c.554 0 1.054-.38 1.487-1.13 1.862-3.225 5.733-15.702 4.622-17.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendBoldcurved;
