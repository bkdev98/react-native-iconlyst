import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassage3HeartBroken = ({
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
      d="M12.062 3.474H8.134c-2.86 0-4.634 2.025-4.634 4.885v7.677c0 2.86 1.74 4.876 4.634 4.876M20.937 11.887v4.15c0 2.859-1.775 4.875-4.635 4.875H11.75M8.469 15.034h4.836M8.47 10.78h1.973M18.754 8.293s-2.14-1.165-2.64-2.718c-.311-.97.052-2.077 1.069-2.405a1.74 1.74 0 0 1 1.57.264 1.75 1.75 0 0 1 1.568-.264c1.017.328 1.383 1.435 1.072 2.405-.166.528-.53 1.014-.936 1.425"
    />
  </Svg>
);
export default IconlystNewMassage3HeartBroken;
