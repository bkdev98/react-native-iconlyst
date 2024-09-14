import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.708 13.22c-.2-.873.04-1.784.62-2.457a1.47 1.47 0 0 0-.958-.155 3 3 0 0 0-.697.209c-.522.266-1.195.26-1.763-.031a1.456 1.456 0 0 0-1.95.56 2.3 2.3 0 0 0-.36 1.403c.003.602.11 1.164.313 1.673a5.1 5.1 0 0 0 1.092 1.78c.184.235.426.28.616.169a2.83 2.83 0 0 1 2.503-.071c.323.199.642.133.805-.106.366-.42.637-.834.837-1.274a2.8 2.8 0 0 1-1.058-1.7"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.315 15.093a6.3 6.3 0 0 1-1.208 2.023c-.566.834-1.78 1.082-2.704.497-.275-.123-.701-.112-1.061.073a1.85 1.85 0 0 1-.936.25 1.94 1.94 0 0 1-1.543-.763c-.561-.585-1.047-1.374-1.353-2.22a6 6 0 0 1-.409-2.152 3.73 3.73 0 0 1 .592-2.258 2.95 2.95 0 0 1 3.912-1.086.47.47 0 0 0 .428.003 4.4 4.4 0 0 1 1.083-.331 2.97 2.97 0 0 1 2.777 1.006q.277.328.241.703c-.036.375-.302.587-.39.657-.479.34-.69.887-.569 1.416.079.408.321.739.669.932.533.31.67.682.471 1.25m-4.543-7.628.554-.73a.75.75 0 1 1 1.194.907l-.554.729a.746.746 0 0 1-1.05.145.75.75 0 0 1-.144-1.051M12 3.009c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAppleBold;
