import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandbarrowBroken = ({
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
      d="M8.915 14.315h-1.79l-2.07-5.16a.855.855 0 0 1 .79-1.17h11.8"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.895 6.015h-2.07c-.4 0-.74.28-.83.66l-1.71 7.63h-5.1M7.465 17.545c0 1.2-.98 2.18-2.18 2.18s-2.18-.98-2.18-2.18.98-2.18 2.18-2.18 2.18.98 2.18 2.18M5.285 17.435l1.85-3.18M14.305 16.835l.64 2.28c.08.29.35.5.65.5.38 0 .69-.31.68-.7l-.11-4.41M6.575 7.695s1.05-3.41 4.26-3.41c1.14 0 2.01.43 2.66.99"
    />
  </Svg>
);
export default IconlystHandbarrowBroken;
