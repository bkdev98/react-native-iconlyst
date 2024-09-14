import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRocketOutline = ({
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
      d="m10.657 5.993.002-.003.013-.014.048-.048q.06-.063.174-.171a14.7 14.7 0 0 1 2.951-2.178c1.913-1.062 4.619-1.93 7.451-.794a.75.75 0 0 1 .414.41c1.145 2.778.272 5.489-.787 7.41a15.2 15.2 0 0 1-2.347 3.166l-.048.048-.014.014-.004.004h-.001v.002l-.003.002-.006.005-.02.02-.07.065a10 10 0 0 1-.219.191l-.308 3.949a.75.75 0 0 1-.217.472l-1.815 1.814a.75.75 0 0 1-1.176-.148 30 30 0 0 0-1.808-2.715c-.391.183-.788.363-1.154.507-.356.14-.73.265-1.064.312a.75.75 0 0 1-.634-.213l-3.617-3.618a.75.75 0 0 1-.199-.707c.144-.592.478-1.386.796-2.126l.008-.018a31 31 0 0 0-2.715-1.81.75.75 0 0 1-.148-1.175L5.955 6.83a.75.75 0 0 1 .472-.217l3.95-.308a10 10 0 0 1 .256-.288l.02-.02zM9.164 7.905l-2.344.183-.947.946a32 32 0 0 1 1.832 1.25 29 29 0 0 1 1.459-2.379m-.942 4.69c-.182.43-.339.819-.448 1.142l3.006 3.006q.165-.052.384-.138.346-.137.747-.322a29 29 0 0 0-3.689-3.689m5.062 2.996a30.4 30.4 0 0 0-4.378-4.377 26 26 0 0 1 1.826-2.93c.314-.433.571-.751.747-.959a9 9 0 0 1 .247-.28l.01-.01.01-.01.008-.009.034-.035q.047-.048.145-.143a13.19 13.19 0 0 1 2.927-2.102l4.887 4.888q-.068.13-.138.258a13.7 13.7 0 0 1-2.098 2.833l-.035.035-.008.008h-.001l-.001.002h-.001l-.012.012-.052.048a9 9 0 0 1-.228.2c-.208.175-.526.432-.96.746a26 26 0 0 1-2.929 1.825m.93 1.201q.653.889 1.25 1.831l.946-.945.182-2.344a29 29 0 0 1-2.377 1.458m6.165-8.658c.416-1.275.543-2.674.058-4.068-1.42-.483-2.82-.363-4.084.043zm-7.113.176a2.094 2.094 0 1 1 2.96 2.962 2.094 2.094 0 0 1-2.96-2.962m1.9 1.06a.594.594 0 1 0-.84.841.594.594 0 0 0 .84-.84M4.403 15.098a.75.75 0 0 1 .864 1.227l-.436-.61.436.61h-.002l-.002.002-.005.004-.012.008a2 2 0 0 1-.143.088 3.126 3.126 0 0 1-1.635.384.75.75 0 0 1 .064-1.499 1.63 1.63 0 0 0 .835-.192l.035-.02zm2.772 2.225a.75.75 0 0 1 0 1.06l-1.043 1.043a.75.75 0 1 1-1.06-1.06l1.042-1.043a.75.75 0 0 1 1.061 0m1.608 2.345-.611-.436-.001.002-.002.002-.003.005-.008.012a2 2 0 0 0-.088.142 3.126 3.126 0 0 0-.384 1.635.75.75 0 0 0 1.499-.063 1.63 1.63 0 0 1 .213-.87v-.002a.75.75 0 0 0-1.226-.863zm.616.427"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRocketOutline;