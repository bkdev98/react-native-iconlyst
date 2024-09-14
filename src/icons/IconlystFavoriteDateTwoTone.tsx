import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDateTwoTone = ({
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
      d="M15.916 3v3.223M8.091 3v3.223"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.49 4.486-8.964.001c-2.633 0-4.277 1.466-4.277 4.162v8.113C3.249 19.5 4.893 21 7.526 21l8.956-.001c2.64 0 4.277-1.474 4.277-4.17V8.648c.007-2.695-1.629-4.162-4.27-4.162"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.455 9.548.745 1.49a.5.5 0 0 0 .379.272l1.669.24a.494.494 0 0 1 .278.845l-1.207 1.16a.49.49 0 0 0-.145.439l.286 1.637a.502.502 0 0 1-.73.522l-1.49-.773a.51.51 0 0 0-.469 0l-1.49.773a.502.502 0 0 1-.73-.522l.285-1.637a.49.49 0 0 0-.144-.44l-1.208-1.159a.495.495 0 0 1 .278-.845l1.669-.24a.5.5 0 0 0 .378-.271l.747-1.492a.507.507 0 0 1 .9 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFavoriteDateTwoTone;
