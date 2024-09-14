import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalContractAltCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.216 7.25a.75.75 0 0 1 .75.75v3.226a.75.75 0 0 1-.75.75H7.99a.75.75 0 0 1 0-1.5h1.415l-1.34-1.34a.75.75 0 0 1 1.06-1.062l1.34 1.341V8a.75.75 0 0 1 .75-.75m.82 5.524a.75.75 0 0 1 .75-.75h3.225a.75.75 0 0 1 0 1.5h-1.415l1.34 1.34a.75.75 0 0 1-1.06 1.061l-1.34-1.34V16a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalContractAltCircleOutline;
