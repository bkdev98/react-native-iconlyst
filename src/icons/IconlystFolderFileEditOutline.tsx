import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileEditOutline = ({
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
      d="M16.119 21.737h-7.3c-3.76 0-6.094-2.331-6.094-6.083V8.342c0-4.033 1.8-6.078 5.337-6.078h1.875a2.9 2.9 0 0 1 2.31 1.155l.857 1.138a1.4 1.4 0 0 0 1.114.557h2.65c3.654 0 5.357 1.87 5.357 5.885l-.027 4.659c.003 3.748-2.327 6.079-6.08 6.079M8.065 3.764c-2.69 0-3.837 1.37-3.837 4.578v7.312c0 2.955 1.63 4.583 4.594 4.583h7.3c2.955 0 4.582-1.628 4.582-4.583l.027-4.66c0-3.191-1.045-4.38-3.856-4.38h-2.653A2.92 2.92 0 0 1 11.91 5.46l-.856-1.141a1.4 1.4 0 0 0-1.112-.555z"
    />
    <Path
      fill={props.color}
      d="M10.238 17.267a1.563 1.563 0 0 1-1.551-1.734l.079-.75c.056-.52.273-1.01.623-1.4l3.181-3.474a1.755 1.755 0 0 1 2.476-.1l.671.62a1.755 1.755 0 0 1 .1 2.475l-3.138 3.425a2.5 2.5 0 0 1-1.445.79l-.727.122a1.6 1.6 0 0 1-.269.026m3.619-6.42a.25.25 0 0 0-.184.08l-3.172 3.464a1 1 0 0 0-.244.553l-.079.749.076.073.728-.122a1 1 0 0 0 .579-.318l3.145-3.434a.25.25 0 0 0 .047-.278.2.2 0 0 0-.057-.078l-.671-.62a.25.25 0 0 0-.172-.07z"
    />
  </Svg>
);
export default IconlystFolderFileEditOutline;
