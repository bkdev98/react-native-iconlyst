import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieAddBroken = ({
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
      d="M12.25 11.828v4.96m2.48-2.48H9.77M3.707 7.476h17.086M9.273 5.208V3m5.953 4.476V3M12.25 21H8.244c-2.8 0-4.544-1.977-4.544-4.775v-8.45C3.7 4.979 5.444 3 8.245 3h8.012c2.8 0 4.543 1.978 4.543 4.776v8.45c0 2.797-1.75 4.774-4.543 4.774h-.35"
    />
  </Svg>
);
export default IconlystMovieAddBroken;
