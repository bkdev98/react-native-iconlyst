import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditBulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="m16.247 2.878 5.607 5.606-9.023 9.023h-.004l-4.842 4.822H2.657v-.249h-.006l-.005-5.6z"
    />
    <Path
      fill={props.color}
      d="M7.985 22.33h13.233v-1.5H9.508z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystEditBulksharp;
