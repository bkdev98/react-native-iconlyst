import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatCodeBulk = ({
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
      d="M17.061 2.86H6.94A4.445 4.445 0 0 0 2.5 7.3v6.914a4.444 4.444 0 0 0 4.44 4.44h1.068c.443 0 .859.171 1.173.485l1.421 1.421c.386.385.892.578 1.399.578.506 0 1.012-.193 1.398-.578l1.421-1.42c.314-.315.73-.487 1.173-.487h1.068a4.444 4.444 0 0 0 4.439-4.439V7.3a4.444 4.444 0 0 0-4.439-4.44"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.962 11.702-2.287 2.286a.746.746 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l1.757-1.757-1.757-1.755a.75.75 0 1 1 1.061-1.061l2.287 2.285a.75.75 0 0 1 0 1.061m-4.437-2.564-1.636 4.572a.75.75 0 1 1-1.412-.506l1.635-4.571a.75.75 0 0 1 1.413.505m-4.14 3.79a.749.749 0 1 1-1.061 1.06l-2.286-2.286a.75.75 0 0 1 0-1.062l2.286-2.285a.75.75 0 1 1 1.061 1.06l-1.756 1.757z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatCodeBulk;
