import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneRemoveOutline = ({
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
      d="M16.082 21.748a.8.8 0 0 1-.182-.022l-3.421-.856-3.422.856a.75.75 0 0 1-.932-.728v-1.8a.75.75 0 0 1 .273-.578l1.559-1.288-.18-1.966-5.135-.04a.75.75 0 0 1-.741-.793q.014-.293.023-.575.004-.671.1-1.335a2.66 2.66 0 0 1 1.629-1.928 136 136 0 0 1 3.254-1.556.75.75 0 1 1 .63 1.36 126 126 0 0 0-3.223 1.542c-.646.313-.772.61-.811.835a7.5 7.5 0 0 0-.078.956l5.04.04a.75.75 0 0 1 .74.68l.279 3.038a.75.75 0 0 1-.27.646l-1.592 1.316v.488l2.673-.668a.7.7 0 0 1 .363 0l2.67.668v-.485l-1.615-1.315a.75.75 0 0 1-.272-.654l.25-2.622a.75.75 0 0 1 1.495.144l-.214 2.222 1.58 1.287a.75.75 0 0 1 .277.58v1.8a.75.75 0 0 1-.75.75z"
    />
    <Path
      fill={props.color}
      d="M19.707 21.046a.74.74 0 0 1-.53-.22L3.646 5.294a.75.75 0 0 1 1.06-1.06l15.53 15.531a.75.75 0 0 1-.53 1.28M18.038 15.343a.75.75 0 1 1-.01-1.5l1.493-.012a7 7 0 0 0-.078-.96c-.04-.222-.165-.519-.8-.828a151 151 0 0 0-4.075-1.939 1.38 1.38 0 0 1-.888-1.421c.016-.994.027-2.057-.027-3.105-.035-.708-.384-1.83-1.17-1.83-.784 0-1.143 1.122-1.18 1.829-.024.5-.034.99-.042 1.5a.75.75 0 0 1-.75.738H10.5a.75.75 0 0 1-.74-.761c.009-.523.02-1.035.046-1.55.083-1.615 1.029-3.252 2.678-3.252s2.586 1.637 2.667 3.253c.057 1.1.046 2.187.029 3.212v.017a168 168 0 0 1 4.124 1.966 2.65 2.65 0 0 1 1.623 1.922q.099.672.106 1.351.006.277.022.564a.75.75 0 0 1-.74.792l-2.262.018z"
    />
  </Svg>
);
export default IconlystPlaneRemoveOutline;
