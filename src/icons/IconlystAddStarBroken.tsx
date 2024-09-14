import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddStarBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.573 21.779q-.767.136-1.573.137a9 9 0 0 1-9-9 9 9 0 0 1 5.37-8.238M12 3.916a9 9 0 0 1 8.675 11.403M17.955 17.492v3.645M19.779 19.316H16.13"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.322 15.877a.53.53 0 0 0 .77.552l1.577-.817a.54.54 0 0 1 .495 0l1.575.816a.53.53 0 0 0 .771-.552l-.302-1.73a.52.52 0 0 1 .153-.463l1.275-1.226a.522.522 0 0 0-.294-.893l-1.763-.254a.53.53 0 0 1-.4-.286L12.39 9.45a.534.534 0 0 0-.949 0l-.79 1.575a.53.53 0 0 1-.4.287l-1.763.253a.522.522 0 0 0-.294.894l1.277 1.225"
    />
  </Svg>
);
export default IconlystAddStarBroken;
