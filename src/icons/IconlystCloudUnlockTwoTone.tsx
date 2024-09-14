import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudUnlockTwoTone = ({
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
      d="M19.064 16.766a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.139-4.103-4.14 0-1.634-1.28-4.899-4.897-4.899S7.603 7.218 7.603 8.851c-2.27.02-4.103 1.545-4.103 4.141 0 1.68 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.964 20.044h-2.93A1.454 1.454 0 0 1 9.58 18.59v-1.644c0-.803.651-1.454 1.454-1.454h2.93c.803 0 1.454.651 1.454 1.454v1.644c0 .803-.651 1.454-1.454 1.454"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.75 15.52v-1.09a1.749 1.749 0 0 1 2.879-1.304"
    />
  </Svg>
);
export default IconlystCloudUnlockTwoTone;
