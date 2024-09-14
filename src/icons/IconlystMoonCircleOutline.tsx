import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCircleOutline = ({
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
      d="M12.61 21.745c-2.5 0-4.99-.95-6.89-2.85-3.8-3.8-3.8-9.99 0-13.79s9.99-3.8 13.79 0 3.8 9.99 0 13.79c-1.9 1.9-4.4 2.85-6.89 2.85zm0-17.99c-2.11 0-4.23.8-5.83 2.41-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0 3.22-8.45 0-11.67a8.21 8.21 0 0 0-5.83-2.41z"
    />
    <Path
      fill={props.color}
      d="M12.51 17.745c-2.6 0-4.91-1.74-5.62-4.24-.08-.29.02-.63.25-.82s.59-.23.86-.09c1.48.79 3.33.51 4.52-.68s1.47-3.05.68-4.52a.8.8 0 0 1 .08-.85c.19-.24.53-.35.82-.27 2.5.71 4.24 3.03 4.24 5.62 0 3.22-2.62 5.85-5.85 5.85zm-3.49-3.26a4.37 4.37 0 0 0 3.49 1.76c2.4 0 4.35-1.95 4.35-4.35 0-1.4-.68-2.69-1.76-3.49.24 1.65-.29 3.36-1.5 4.58a5.38 5.38 0 0 1-4.57 1.5zM10.49 8.575c-.2 0-.4-.08-.54-.23-.29-.3-.28-.78.02-1.07.3-.28.77-.28 1.06.02.29.31.27.78-.03 1.07a.75.75 0 0 1-.52.21z"
    />
    <Path
      fill={props.color}
      d="M9.57 11.465a.757.757 0 0 1-.53-1.29c.29-.29.76-.3 1.06 0 .29.3.29.78 0 1.07-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystMoonCircleOutline;
