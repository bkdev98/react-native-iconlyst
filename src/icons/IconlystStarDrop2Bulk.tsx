import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarDrop2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m18.802 13.755-2.834-1.42a.46.46 0 0 1-.246-.344l-.455-3.174a1.45 1.45 0 0 0-.43-.846 1.45 1.45 0 0 0-1.028-.402 1.43 1.43 0 0 0-1.006.446l-2.21 2.295a.43.43 0 0 1-.384.13L7.106 9.9a1.46 1.46 0 0 0-.932.141 1.456 1.456 0 0 0-.603 1.96l1.47 2.839a.47.47 0 0 1 .002.431L5.57 18.107c-.146.288-.196.602-.146.904a1.46 1.46 0 0 0 1.673 1.204l3.123-.541a.43.43 0 0 1 .378.125l2.207 2.302a1.47 1.47 0 0 0 1.039.44c.312 0 .614-.101.868-.296a1.43 1.43 0 0 0 .554-.95l.457-3.175a.44.44 0 0 1 .245-.34l2.834-1.42.004-.002c.259-.133.48-.352.63-.628a1.467 1.467 0 0 0-.634-1.974"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.365 7.592a.75.75 0 0 0 .75-.75v-1.78a.75.75 0 0 0-1.5 0v1.78c0 .414.336.75.75.75M18.635 10.052a.75.75 0 0 0 .75-.75v-4.24a.75.75 0 0 0-1.5 0v4.24c0 .414.336.75.75.75M12.502 6.142a.75.75 0 0 0 .75-.75v-1.35a.75.75 0 0 0-1.5 0v1.35c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStarDrop2Bulk;
