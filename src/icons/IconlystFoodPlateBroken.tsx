import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFoodPlateBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.58 13.885a9.3 9.3 0 0 0 .413-1.84 1.027 1.027 0 0 0-1.019-1.144H4.026c-.608 0-1.09.534-1.019 1.138a9.44 9.44 0 0 0 4.781 7.116 4 4 0 0 0 1.946.489h4.533c.677 0 1.349-.157 1.94-.486a9.46 9.46 0 0 0 3.002-2.638M13.686 10.898q.04-.27.038-.54c0-.73-.2-1.43-.54-2.018a4.062 4.062 0 0 0-7.277.454"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.908 10.898v-.02c0-.932.622-1.727 1.471-1.99M13.186 8.34a3.42 3.42 0 0 1 2.264-.852 3.47 3.47 0 0 1 3.467 3.41M16.335 4.356l-1.697 3.23M12.367 4.502l.816 3.838"
    />
  </Svg>
);
export default IconlystFoodPlateBroken;
