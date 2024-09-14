import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleGmailEmailTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.912 10.121v10.31M17.088 20.43V10.11M5.227 4.064l.277.16 6.365 4.296 6.365-4.296.407-.255"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.07 7.483 7.804 5.263a1.85 1.85 0 0 0 2.069 0l7.986-5.387"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.53 3.473h8.939C19.262 3.473 21 5.444 21 8.234v7.53c0 2.79-1.738 4.761-4.532 4.761H7.53c-2.792 0-4.53-1.971-4.53-4.761v-7.53c0-2.79 1.746-4.761 4.53-4.761"
    />
  </Svg>
);
export default IconlystGoogleGmailEmailTwoTone;
