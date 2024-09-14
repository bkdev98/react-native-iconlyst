import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarStarTwoTone = ({
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
      d="M4.484 9.664h16.042"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.14 3v2.962M8.868 3v2.962"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.314 4.422h-7.62C6.051 4.422 4.4 5.894 4.4 8.6v8.146C4.4 19.494 6.05 21 8.694 21h7.613c2.651 0 4.293-1.48 4.293-4.186V8.6c.008-2.706-1.634-4.178-4.286-4.178"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.877 12.317.624 1.246c.062.123.18.208.316.227l1.395.2a.414.414 0 0 1 .233.708l-1.01.97a.41.41 0 0 0-.12.366l.239 1.369a.42.42 0 0 1-.61.437l-1.247-.646a.43.43 0 0 0-.391 0l-1.247.647a.42.42 0 0 1-.61-.437l.239-1.37a.41.41 0 0 0-.12-.367l-1.01-.969a.413.413 0 0 1 .23-.707l1.397-.2a.42.42 0 0 0 .316-.228l.625-1.246a.424.424 0 0 1 .751 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCalendarStarTwoTone;
