import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWarningErrorElectricRefuelingOutline = ({
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
      d="M12.25 7.4a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2m-6.6 5.1a6.6 6.6 0 1 1 13.2 0 6.6 6.6 0 0 1-13.2 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.14 9.13a.75.75 0 0 1 .334 1.006l-.81 1.614h2.386a.75.75 0 0 1 .67 1.086l-1.354 2.7a.75.75 0 1 1-1.34-.672l.809-1.614H10.45a.75.75 0 0 1-.67-1.086l1.353-2.7a.75.75 0 0 1 1.007-.334M6.35 5.665c.295.29.3.765.01 1.06a8.246 8.246 0 0 0 0 11.55.75.75 0 1 1-1.071 1.05 9.746 9.746 0 0 1 0-13.65.75.75 0 0 1 1.06-.01M18.15 5.665a.75.75 0 0 1 1.061.01 9.746 9.746 0 0 1 0 13.65.75.75 0 1 1-1.07-1.05 8.246 8.246 0 0 0 0-11.55.75.75 0 0 1 .01-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWarningErrorElectricRefuelingOutline;
