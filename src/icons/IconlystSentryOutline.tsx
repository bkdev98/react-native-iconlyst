import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSentryOutline = ({
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
      d="M5.295 20.78c-.12 0-.21 0-.45-.02-1.45-.07-2.62-1.31-2.6-2.76 0-.41.34-.74.75-.74h.01c.41 0 .74.35.74.76-.01.64.53 1.21 1.18 1.24.31.02.31.02.59.01.25 0 .69-.01 1.67-.01-.12-.66-.39-1.28-.8-1.82a4.2 4.2 0 0 0-2.25-1.52.72.72 0 0 1-.49-.44.77.77 0 0 1 .04-.66c.56-.97 1.24-2.15 2.04-3.53.19-.32.58-.46.93-.32 1.81.73 3.34 1.97 4.43 3.59a9.73 9.73 0 0 1 1.64 4.7h2.51a12.3 12.3 0 0 0-7.15-10.4.73.73 0 0 1-.4-.46c-.06-.2-.04-.42.07-.6l1.84-3.18c.46-.85 1.41-1.4 2.4-1.4s1.93.56 2.41 1.42l7.1 12.25.05.1c.34.84.24 1.8-.26 2.56-.51.75-1.38 1.22-2.28 1.22h-7.01c-.41 0-.75-.34-.75-.75 0-1.65-.49-3.24-1.41-4.61a8.1 8.1 0 0 0-3.16-2.77c-.46.8-.88 1.53-1.26 2.17.84.39 1.58.99 2.15 1.73.76.99 1.17 2.23 1.17 3.47 0 .41-.34.75-.75.75-1.55 0-2.16 0-2.46.01h-.25zm11.45-1.52h2.26c.41 0 .81-.21 1.04-.55.22-.33.27-.76.13-1.13l-7.08-12.21c-.22-.4-.66-.66-1.1-.66s-.88.26-1.09.64l-1.45 2.5c4.24 2.26 7.02 6.6 7.29 11.4z"
    />
  </Svg>
);
export default IconlystSentryOutline;
