import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.601 5.843c.881-.82 2.091-1.24 3.437-1.24h6.425c1.347 0 2.557.422 3.437 1.243.886.826 1.377 1.999 1.377 3.373v7.913c0 1.377-.49 2.551-1.378 3.377-.88.82-2.09 1.24-3.436 1.24H9.038c-1.346 0-2.556-.42-3.437-1.24-.886-.826-1.377-2-1.377-3.378V9.22c0-1.377.49-2.55 1.377-3.376M6.624 6.94c-.55.512-.9 1.271-.9 2.278v7.912c0 1.008.35 1.768.9 2.28.556.518 1.378.839 2.414.839h6.425c1.036 0 1.858-.321 2.414-.839.55-.512.9-1.272.9-2.279V9.22c0-1.003-.35-1.763-.9-2.276-.556-.518-1.379-.84-2.414-.84H9.038c-1.036 0-1.859.32-2.414.838"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.73 4.744a2.494 2.494 0 0 1 2.494-2.494h2.057a2.493 2.493 0 0 1 2.493 2.494v.596a.75.75 0 0 1-1.5 0v-.596a.993.993 0 0 0-.993-.994h-2.057a.994.994 0 0 0-.994.994v.596a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.715 4.708a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-1.5 0v-15.5a.75.75 0 0 1 .75-.75M15.791 4.708a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-1.5 0v-15.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag3Outline;
