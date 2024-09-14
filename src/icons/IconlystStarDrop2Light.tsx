import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarDrop2Light = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.076 15.788-2.834 1.418a.95.95 0 0 0-.516.72l-.457 3.173a.939.939 0 0 1-1.607.528l-2.206-2.294a.93.93 0 0 0-.834-.275l-3.113.544a.954.954 0 0 1-.995-1.388l1.47-2.835a.97.97 0 0 0 0-.89l-1.47-2.837a.954.954 0 0 1 .994-1.387l3.113.543a.93.93 0 0 0 .835-.274l2.205-2.297a.938.938 0 0 1 1.608.528l.456 3.174c.044.31.237.579.516.72l2.835 1.421a.961.961 0 0 1 0 1.708"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.863 4.944v1.777M18.133 4.944v4.237M12 3.916v1.35"
    />
  </Svg>
);
export default IconlystStarDrop2Light;
