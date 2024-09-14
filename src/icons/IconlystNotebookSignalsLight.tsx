import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookSignalsLight = ({
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
      d="M21.186 17.283V6.955a3.81 3.81 0 0 0-3.657-3.836l-8.493.001a3.75 3.75 0 0 0-3.67 3.835v10.507a3.747 3.747 0 0 0 3.76 3.657h8.39a3.754 3.754 0 0 0 3.67-3.836M3.814 16.816h3.06m-3.06-4.698h3.06M3.814 7.42h3.06M17.897 17.228v-4.426M12.548 17.228v-4.174M15.223 17.228v-1.841M9.795 17.228v-1.841"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.577 10.707 2.667-2.867 3.043 1.976 2.61-2.787"
    />
  </Svg>
);
export default IconlystNotebookSignalsLight;
