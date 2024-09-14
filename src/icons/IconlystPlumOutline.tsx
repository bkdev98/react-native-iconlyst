import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlumOutline = ({
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
      d="M12 8.133c-3.06 0-5.525 2.233-5.525 5.658 0 3.544 2.576 6.459 5.525 6.459s5.525-2.915 5.525-6.46c0-3.424-2.465-5.657-5.525-5.657M4.975 13.79c0-4.272 3.155-7.158 7.025-7.158s7.025 2.886 7.025 7.158c0 4.151-3.043 7.959-7.025 7.959s-7.025-3.808-7.025-7.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.212 2.876a.75.75 0 0 1 1.059-.06c2.342 2.088 3.196 4.86 3.335 7.411.138 2.541-.427 4.929-1 6.374a.75.75 0 1 1-1.395-.553c.506-1.273 1.022-3.444.897-5.74-.124-2.286-.879-4.628-2.835-6.373a.75.75 0 0 1-.061-1.059"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.352 6.89c1.734-.38 2.37-1.065 2.643-1.627.175-.36.243-.75.273-1.151.01-.125.015-.242.02-.36-.796-.02-1.338.108-1.708.289-.453.222-.72.558-.894.972-.183.435-.258.944-.304 1.48l-.03.39zm.569-4.196c.817-.4 1.884-.538 3.257-.38a.75.75 0 0 1 .65.893 3 3 0 0 0-.033.374l-.005.128c-.006.152-.012.332-.026.515-.037.486-.126 1.09-.42 1.696-.622 1.277-2.006 2.275-4.768 2.62a.75.75 0 0 1-.814-.951c.025-.087.047-.229.067-.457q.014-.162.027-.356v-.005l.032-.406c.048-.566.136-1.272.415-1.934.288-.684.782-1.328 1.618-1.737"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlumOutline;
