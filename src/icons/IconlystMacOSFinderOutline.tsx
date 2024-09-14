import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacOSFinderOutline = ({
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
      d="M16.46 21.394H7.54c-3.16 0-5.29-2.22-5.29-5.52v-7.75c0-3.25 2.17-5.52 5.29-5.52h8.92c3.16 0 5.29 2.22 5.29 5.52v7.75c0 3.3-2.13 5.52-5.29 5.52M7.54 4.104c-2.3 0-3.79 1.58-3.79 4.02v7.75c0 2.44 1.49 4.02 3.79 4.02h8.92c2.3 0 3.79-1.58 3.79-4.02v-7.75c0-2.44-1.49-4.02-3.79-4.02z"
    />
    <Path
      fill={props.color}
      d="M13.67 21.395c-.35 0-.66-.25-.73-.6a35 35 0 0 1-.56-3.96c-.12-1.48-.12-2.5-.1-2.96-.41-.01-.82-.05-1.25-.11-1.19-.15-1.4-.9-1.44-1.61-.07-1.38.94-7.03 1.34-8.95a.74.74 0 0 1 .89-.58c.41.08.67.48.58.89-.49 2.38-1.36 7.51-1.31 8.56 0 .08.01.14.02.18.03 0 .07.01.13.02.5.07.95.1 1.39.1q.555 0 .87.33c.32.34.3.76.29 1.1-.01.3-.04 1.33.09 2.9.1 1.24.28 2.51.53 3.78.08.41-.18.8-.59.88-.05 0-.1.01-.15.01z"
    />
    <Path
      fill={props.color}
      d="M11.85 17.856c-1.9 0-3.72-.7-5.13-1.96a.756.756 0 0 1-.06-1.06c.28-.31.75-.33 1.06-.06a6.17 6.17 0 0 0 4.13 1.58c1.66 0 3.23-.65 4.41-1.84.29-.29.77-.29 1.06 0s.29.77 0 1.06a7.67 7.67 0 0 1-5.47 2.28M16.43 10.167c-.41 0-.75-.34-.75-.75v-1.13c0-.41.34-.75.75-.75s.75.34.75.75v1.13c0 .41-.34.75-.75.75m-8.86 0c-.41 0-.75-.34-.75-.75v-1.13c0-.41.34-.75.75-.75s.75.34.75.75v1.13c0 .41-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystMacOSFinderOutline;
