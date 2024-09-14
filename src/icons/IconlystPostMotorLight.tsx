import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostMotorLight = ({
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
      d="M13.501 4.71h2.13c.421 0 .898.32 1.058.712l2.986 7.31c.166.404.06.869-.265 1.16l-2.715 2.448c-.19.171-.437.267-.693.267H3.85v-2.498a3.246 3.246 0 0 1 3.246-3.246h1.842c.81 0 1.548.46 1.907 1.185l.658 1.332a1.58 1.58 0 0 0 1.416.878h.96c.647 0 1.182-.502 1.222-1.147l-.066-4.377a1.414 1.414 0 0 1 1.414-1.436h1.007M10.543 16.61c.008.051.008.112.008.164a2.517 2.517 0 0 1-2.515 2.515 2.51 2.51 0 0 1-2.515-2.515c0-.052 0-.113.01-.164"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.97 14.294a2.52 2.52 0 0 1 2.144 2.48 2.517 2.517 0 0 1-2.515 2.516 2.51 2.51 0 0 1-2.515-2.515M18.599 16.792 17.55 15.57M19.943 12.843s1.264.137 1.906 1.11"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.681 10.091c-.91.21-2.056-.266-2.265-1.175-.209-.91.6-1.91 1.509-2.12q1.431 1.406.756 3.295"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.585 4.842 3.684-.008c1.07-.003 1.739.752 1.742 1.822l.007 2.37c.002 1.07-.663 1.828-1.734 1.831l-3.683.007c-1.072.003-1.74-.752-1.743-1.822l-.006-2.37c-.003-1.07.665-1.828 1.733-1.83M6.615 6.981h1.64"
    />
  </Svg>
);
export default IconlystPostMotorLight;
