import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletDoublleLight = ({
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
      d="M21 15.912h-5.023a2.089 2.089 0 1 1 0-4.178h5.022"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.434 6.176H7.566A4.566 4.566 0 0 0 3 10.742v6.164a4.566 4.566 0 0 0 4.566 4.566h8.868A4.566 4.566 0 0 0 21 16.906v-6.164a4.566 4.566 0 0 0-4.566-4.566"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.114 12.606v2.428M18.285 6.548l-1.552-2.483a3.276 3.276 0 0 0-4.505-1.044l-5.012 3.14-.01.011h-.01"
    />
  </Svg>
);
export default IconlystWalletDoublleLight;
