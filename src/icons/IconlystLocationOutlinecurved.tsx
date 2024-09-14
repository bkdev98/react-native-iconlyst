import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLocationOutlinecurved = ({
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
      fillRule="evenodd"
      d="M8.76 10.71a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0m3.25-1.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75c-3.72 0-6.75 3.057-6.75 6.849 0 2.474 1.068 4.916 2.503 6.748.715.912 1.505 1.651 2.267 2.156.773.513 1.459.747 1.98.747s1.207-.234 1.98-.747c.762-.505 1.551-1.244 2.267-2.156 1.435-1.832 2.503-4.274 2.503-6.748 0-3.792-3.031-6.849-6.75-6.849m-8.25 6.849C3.75 5.998 7.434 2.25 12 2.25s8.25 3.747 8.25 8.349c0 2.886-1.233 5.644-2.823 7.673-.797 1.018-1.702 1.874-2.618 2.482-.905.6-1.881.996-2.81.996-.928 0-1.904-.396-2.808-.996-.917-.608-1.82-1.464-2.618-2.482-1.59-2.029-2.823-4.787-2.823-7.673"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLocationOutlinecurved;
