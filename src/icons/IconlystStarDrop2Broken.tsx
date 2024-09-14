import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarDrop2Broken = ({
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
      d="m15.242 17.206 2.834-1.418a.961.961 0 0 0 0-1.708l-2.835-1.421a.96.96 0 0 1-.516-.72l-.456-3.174a.938.938 0 0 0-1.608-.528l-2.205 2.297a.93.93 0 0 1-.835.274l-3.113-.543a.953.953 0 0 0-.995 1.387l1.471 2.837c.144.279.144.61 0 .89l-1.47 2.835a.956.956 0 0 0 .995 1.388l3.113-.544c.307-.054.62.05.834.275l2.206 2.294a.939.939 0 0 0 1.607-.528M5.863 4.944v1.777M18.133 4.944v4.237M12 3.916v1.35"
    />
  </Svg>
);
export default IconlystStarDrop2Broken;
