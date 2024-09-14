import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNodesDistributedOutline = ({
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
      d="M18.46 8.48c-1.58 0-2.88-1.29-2.88-2.88a2.88 2.88 0 1 1 2.88 2.88m0-4.25c-.76 0-1.38.62-1.38 1.38s.62 1.38 1.38 1.38 1.38-.62 1.38-1.38-.62-1.38-1.38-1.38M5.71 8.48c-1.58 0-2.88-1.29-2.88-2.88a2.88 2.88 0 1 1 2.88 2.88m0-4.25c-.76 0-1.38.62-1.38 1.38s.62 1.38 1.38 1.38 1.38-.62 1.38-1.38-.62-1.38-1.38-1.38M18.46 21.23c-1.58 0-2.88-1.29-2.88-2.88a2.88 2.88 0 1 1 2.88 2.88m0-4.25c-.76 0-1.38.62-1.38 1.38s.62 1.38 1.38 1.38 1.38-.62 1.38-1.38-.62-1.38-1.38-1.38M5.71 21.23c-1.58 0-2.88-1.29-2.88-2.88a2.88 2.88 0 1 1 2.88 2.88m0-4.25c-.76 0-1.38.62-1.38 1.38s.62 1.38 1.38 1.38 1.38-.62 1.38-1.38-.62-1.38-1.38-1.38"
    />
    <Path
      fill={props.color}
      d="M9.96 19.11H7.84c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.12c.76 0 1.38-.62 1.38-1.38v-8.5a2.88 2.88 0 0 1 2.88-2.88h2.12c.41 0 .75.34.75.75s-.34.75-.75.75h-2.12c-.76 0-1.38.62-1.38 1.38v8.5a2.88 2.88 0 0 1-2.88 2.88"
    />
  </Svg>
);
export default IconlystNodesDistributedOutline;
