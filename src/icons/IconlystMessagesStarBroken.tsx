import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesStarBroken = ({
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
      d="m13.803 11.522-.627-1.257a.425.425 0 0 0-.755 0l-.628 1.258a.42.42 0 0 1-.318.229l-1.402.201a.417.417 0 0 0-.234.713l1.014.979a.41.41 0 0 1 .122.37l-.24 1.38a.42.42 0 0 0 .613.441l1.254-.652a.42.42 0 0 1 .393 0l1.253.651a.423.423 0 0 0 .613-.44l-.24-1.38a.42.42 0 0 1 .121-.37l1.015-.98a.416.416 0 0 0-.233-.712l-1.404-.202a.42.42 0 0 1-.317-.229"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.142 6.356c-2.75 2.76-3.345 6.848-1.804 10.192.129.32.626 1.203.96 1.783.189.33.17.737-.05 1.047s-.497.708-.714 1.034c-.388.582.024 1.363.722 1.362h.542c2.374-.002 5.85-.003 6.678 0a8.97 8.97 0 0 0 6.92-3.22c2.722-3.227 2.807-8.07.194-11.386A8.99 8.99 0 0 0 8.924 4.455"
    />
  </Svg>
);
export default IconlystMessagesStarBroken;
