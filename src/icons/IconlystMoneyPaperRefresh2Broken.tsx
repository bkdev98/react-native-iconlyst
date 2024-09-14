import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRefresh2Broken = ({
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
      d="M12.412 18.735H6.189C4.223 18.735 3 17.348 3 15.385v-7.4c0-1.963 1.223-3.35 3.188-3.35h1.906M21 9.982V7.984c0-1.964-1.229-3.351-3.188-3.351H11M6.213 8.135h1.403"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 9.395a2.287 2.287 0 1 0 2.289 2.287M17.438 17.895h-1.721v1.6M21 13.686v1.72h-1.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.622 18.057a2.79 2.79 0 0 1-2.418 1.394c-1.54 0-2.487-1.549-2.487-1.549M15.777 15.27a2.78 2.78 0 0 1 2.427-1.403c1.867 0 2.796 1.548 2.796 1.548"
    />
  </Svg>
);
export default IconlystMoneyPaperRefresh2Broken;
