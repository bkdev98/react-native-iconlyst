import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentZip2Light = ({
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
      d="M13.786 3c.557 0 1.092.227 1.478.63l3.792 3.95c.366.38.57.89.57 1.418v8.165A3.813 3.813 0 0 1 15.97 21l-7.926-.001a3.753 3.753 0 0 1-3.67-3.836V6.657A3.746 3.746 0 0 1 8.134 3z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.27 3.063v2.892a2.56 2.56 0 0 0 2.553 2.56h2.74M9.615 17.815v-.01M9.615 14.885v-.01M9.615 6.104v-.01M9.615 9.03v-.01M9.615 11.96v-.01"
    />
  </Svg>
);
export default IconlystDocumentZip2Light;
