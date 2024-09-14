import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatCodeOutline = ({
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
      d="M2.5 7.299c0-2.59 2.1-4.69 4.69-4.69H17.31C19.901 2.61 22 4.71 22 7.3v6.915c0 2.59-2.099 4.69-4.689 4.69h-1.068c-.374 0-.731.148-.995.411l-1.423 1.422c-.87.87-2.28.87-3.15 0l-1.422-1.422a1.4 1.4 0 0 0-.995-.412H7.19a4.69 4.69 0 0 1-4.69-4.69zm4.69-3.19A3.19 3.19 0 0 0 4 7.3v6.915a3.19 3.19 0 0 0 3.19 3.19h1.068c.77 0 1.51.305 2.056.85l1.42 1.422a.73.73 0 0 0 1.03 0l1.423-1.421a2.9 2.9 0 0 1 2.056-.852h1.068a3.19 3.19 0 0 0 3.189-3.19V7.3a3.19 3.19 0 0 0-3.189-3.19z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.635 8.356a.75.75 0 0 1 0 1.061L7.88 11.173l1.756 1.755a.75.75 0 1 1-1.06 1.061l-2.287-2.285a.75.75 0 0 1 0-1.061l2.287-2.287a.75.75 0 0 1 1.06 0M14.864 8.356a.75.75 0 0 1 1.06 0l2.287 2.287a.75.75 0 0 1 0 1.06l-2.286 2.286a.75.75 0 1 1-1.06-1.06l1.755-1.756-1.756-1.756a.75.75 0 0 1 0-1.06M13.322 8.18a.75.75 0 0 1 .454.96l-1.637 4.572a.75.75 0 1 1-1.412-.506l1.636-4.572a.75.75 0 0 1 .96-.453"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatCodeOutline;