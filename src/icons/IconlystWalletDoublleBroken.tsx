import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletDoublleBroken = ({
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
      d="M21.25 15.913h-5.023a2.088 2.088 0 1 1 0-4.178h2.635"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21.472h4.434a4.566 4.566 0 0 0 4.566-4.566v-6.164a4.566 4.566 0 0 0-4.566-4.566H7.816a4.566 4.566 0 0 0-4.566 4.566v6.164a4.566 4.566 0 0 0 4.566 4.566H8.9M8.364 12.607v2.43"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.535 6.548-1.552-2.483a3.276 3.276 0 0 0-4.505-1.044l-5.012 3.14-.01.011h-.01"
    />
  </Svg>
);
export default IconlystWalletDoublleBroken;
