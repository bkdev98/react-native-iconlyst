import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesStarLight = ({
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
      d="M12.277 21.99a8.97 8.97 0 0 0 6.92-3.218c2.722-3.228 2.807-8.072.194-11.388a8.988 8.988 0 0 0-13.448-.811C3.192 9.332 2.598 13.42 4.139 16.764c.128.321.625 1.204.959 1.784.19.33.17.737-.049 1.047s-.498.707-.714 1.033c-.389.583.024 1.363.722 1.363h.541c2.375-.002 5.851-.003 6.679 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.303 11.522-.627-1.257a.425.425 0 0 0-.755 0l-.628 1.258a.42.42 0 0 1-.318.229l-1.402.201a.417.417 0 0 0-.234.713l1.014.979a.41.41 0 0 1 .122.37l-.24 1.38a.42.42 0 0 0 .613.441l1.254-.652a.42.42 0 0 1 .393 0l1.253.651a.423.423 0 0 0 .613-.44l-.24-1.38a.42.42 0 0 1 .121-.37l1.015-.98a.416.416 0 0 0-.233-.712l-1.404-.202a.42.42 0 0 1-.317-.229"
    />
  </Svg>
);
export default IconlystMessagesStarLight;
