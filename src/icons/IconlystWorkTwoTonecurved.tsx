import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkTwoTonecurved = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.211 16.517v-2.628M21.34 11.478l-.03.02c-2.421 1.493-5.62 2.394-9.103 2.394-3.484 0-6.673-.901-9.094-2.393l-.03-.021" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 13.35C3 7.2 5.303 5.149 12.211 5.149c6.91 0 9.211 2.05 9.211 8.203s-2.302 8.203-9.21 8.203S3 19.503 3 13.35"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.474 5.37v-.63c0-1.265-.923-2.29-2.06-2.29h-2.405c-1.137 0-2.06 1.025-2.06 2.29v.63"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWorkTwoTonecurved;
