import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieAddTwoTone = ({
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
      d="M16.507 21H8.494c-2.8 0-4.544-1.977-4.544-4.775v-8.45C3.95 4.979 5.694 3 8.495 3h8.012c2.8 0 4.543 1.978 4.543 4.776v8.45c0 2.797-1.75 4.774-4.543 4.774M12.5 11.828v4.96m2.48-2.48h-4.96"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.957 7.476h17.086m-11.52 0V3m5.954 4.476V3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMovieAddTwoTone;
