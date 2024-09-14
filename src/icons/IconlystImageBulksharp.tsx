import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBulksharp = ({
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
      fillRule="evenodd"
      d="M2.5 22.354H22v-19.5H2.5z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m18.742 19.064.146-.032.181-.23-4.051-6.795h-.362l-2.963 3.933-3.152-1.59-.379-.026-2.413 4.468.172.272zM10.928 8.716a2.176 2.176 0 0 0-2.171-2.171c-1.196 0-2.17.973-2.17 2.17s.974 2.17 2.17 2.17a2.173 2.173 0 0 0 2.171-2.17"
    />
  </Svg>
);
export default IconlystImageBulksharp;
