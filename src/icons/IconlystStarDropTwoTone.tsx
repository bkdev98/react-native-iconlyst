import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarDropTwoTone = ({
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
      d="m13.369 9.042 1.44 2.88c.144.283.416.479.732.524l3.223.464a.953.953 0 0 1 .537 1.632l-2.331 2.24a.95.95 0 0 0-.28.849l.553 3.162a.97.97 0 0 1-1.41 1.01l-2.88-1.494a.99.99 0 0 0-.903 0l-2.882 1.494a.968.968 0 0 1-1.41-1.01l.554-3.161a.95.95 0 0 0-.28-.849l-2.334-2.24a.956.956 0 0 1 .537-1.633l3.225-.463a.97.97 0 0 0 .73-.525l1.444-2.88a.977.977 0 0 1 1.735 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.768 4.96v3.258M12.5 3.916v1.37M18.232 4.96v3.258"
    />
  </Svg>
);
export default IconlystStarDropTwoTone;
