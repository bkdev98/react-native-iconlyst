import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGmailLight = ({
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
      d="M17.072 6.562v10.891a1.956 1.956 0 1 0 3.913 0V6.563a1.955 1.955 0 1 0-3.913 0M6.928 6.566v10.89a1.956 1.956 0 1 1-3.912 0V6.567a1.955 1.955 0 1 1 3.912 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.318 5.147 7.052 6.808a1.956 1.956 0 1 1-2.693 2.837L3.625 7.985a1.957 1.957 0 0 1 2.693-2.838"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.682 5.123-7.052 6.808a1.956 1.956 0 1 0 2.693 2.837l7.052-6.807a1.956 1.956 0 0 0-2.693-2.838"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGmailLight;
