import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesStarTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.008 21.02a8.985 8.985 0 0 0 10.157-1.81c3.511-3.523 3.518-9.241 0-12.77a8.985 8.985 0 0 0-12.728 0c-2.75 2.759-3.345 6.847-1.803 10.19.198.494.352.892.352 1.278 0 1.077-1.037 2.412-.346 3.105.69.693 2.022-.347 3.089-.352.384 0 .787.16 1.28.359"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.181 10.133.627 1.257c.062.124.18.209.318.227l1.402.203a.416.416 0 0 1 .234.713l-1.015.978a.42.42 0 0 0-.121.37l.24 1.38a.423.423 0 0 1-.613.442L13 15.05a.43.43 0 0 0-.393 0l-1.254.652a.42.42 0 0 1-.612-.442l.24-1.38a.41.41 0 0 0-.121-.37l-1.016-.977a.418.418 0 0 1 .234-.714l1.402-.202a.42.42 0 0 0 .319-.228l.627-1.257a.425.425 0 0 1 .755 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesStarTwoTone;
