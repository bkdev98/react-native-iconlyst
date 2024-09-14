import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandyGame1Outline = ({
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
      d="M5.68 3.589c.804-.862 1.944-1.339 3.277-1.339h6.586c1.336 0 2.477.477 3.28 1.339.797.856 1.205 2.031 1.205 3.336v10.15c0 1.305-.408 2.48-1.205 3.336-.803.862-1.944 1.339-3.281 1.339H8.957c-1.336 0-2.477-.477-3.28-1.339-.796-.856-1.204-2.031-1.204-3.336V6.925c0-1.306.41-2.48 1.207-3.336M6.778 4.61c-.496.532-.805 1.32-.805 2.314v10.15c0 .995.308 1.783.802 2.314.49.525 1.216.861 2.182.861h6.585c.966 0 1.694-.336 2.183-.861.495-.531.803-1.319.803-2.314V6.925c0-.995-.308-1.783-.803-2.314-.49-.525-1.216-.861-2.182-.861H8.957c-.962 0-1.689.335-2.18.861"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.049 13.923a.75.75 0 0 1 .75.75v.556h.583a.75.75 0 0 1 0 1.5h-.583v.555a.75.75 0 0 1-1.5 0v-.555h-.582a.75.75 0 0 1 0-1.5h.582v-.556a.75.75 0 0 1 .75-.75M13.69 15.137a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M15.219 17.245a.75.75 0 0 1 .75-.75h.01a.75.75 0 1 1 0 1.5h-.01a.75.75 0 0 1-.75-.75M4.473 10.405a.75.75 0 0 1 .75-.75h14.054a.75.75 0 0 1 0 1.5H5.223a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandyGame1Outline;
