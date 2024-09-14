import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentCopyBulk = ({
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
      d="M8.88 6.31h2.48c.63 0 1.24.26 1.68.72l2.94 3.06c.42.43.65 1.01.65 1.62v6.32c.01 2-1.55 3.64-3.55 3.72h-6.2c-.96-.02-1.87-.42-2.55-1.13-.67-.7-1.03-1.63-1.01-2.61V9.89C3.37 7.91 5 6.31 6.97 6.31h1.91m4.17 13.94a2.19 2.19 0 0 0 2.08-2.22v-5.35h-1.72c-1.66-.01-3.01-1.36-3.01-3.01V7.81H6.97c-1.16 0-2.13.94-2.15 2.1v8.12c-.02.59.2 1.14.6 1.55.39.42.93.66 1.51.67z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M17.11 16.19c1.15-.05 2.09-1.04 2.07-2.21V8.62h-1.71a3.03 3.03 0 0 1-3.01-3.02V3.75h-3.44c-1.17 0-2.11.92-2.14 2.1v.46h-1.5v-.48c.05-1.99 1.68-3.58 3.64-3.58h4.4c.62 0 1.24.26 1.68.72l2.94 3.06c.41.41.64.99.64 1.62v6.32c.03 1.97-1.56 3.64-3.55 3.72h-.5v-1.5z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentCopyBulk;
