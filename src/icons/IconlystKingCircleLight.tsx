import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingCircleLight = ({
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
      d="M21.5 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.333 9.818-1.76 1.426a.215.215 0 0 1-.298-.023L12.66 9.405a.214.214 0 0 0-.322 0l-1.615 1.816a.214.214 0 0 1-.296.023L8.665 9.818a.216.216 0 0 0-.35.204l.721 4.09c.057.324.339.559.669.559h5.591c.33 0 .612-.235.669-.56l.719-4.09c.035-.198-.195-.33-.35-.203"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKingCircleLight;
