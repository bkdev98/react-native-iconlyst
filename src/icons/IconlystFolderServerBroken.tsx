import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderServerBroken = ({
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
      d="M5.33 11.398c0 2.487 1.469 3.952 3.961 3.952H14.7c2.486 0 3.951-1.465 3.951-3.952l.02-2.48c0-2.537-.921-3.805-3.413-3.805h-1.966c-.499 0-.969-.236-1.269-.635l-.634-.843c-.3-.4-.769-.634-1.268-.635H8.731c-2.487 0-3.4 1.466-3.4 3.948v1.259"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.497 19.501a1.497 1.497 0 1 1-2.995 0 1.497 1.497 0 0 1 2.995 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.814 19.504h-4.319m-2.996 0H6.184M11.998 18v-2.637"
    />
  </Svg>
);
export default IconlystFolderServerBroken;
