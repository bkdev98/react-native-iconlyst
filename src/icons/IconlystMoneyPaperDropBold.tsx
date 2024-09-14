import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperDropBold = ({
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
      d="M11.999 13.765a1.454 1.454 0 1 0 0 2.91 1.454 1.454 0 1 0 0-2.91"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.577 19.215h-1.353a.75.75 0 0 1 0-1.5h1.353a.75.75 0 0 1 0 1.5m-5.578-1.04a2.96 2.96 0 0 1-2.956-2.96 2.956 2.956 0 0 1 5.912 0 2.96 2.96 0 0 1-2.956 2.96m-4.225-5.46H6.422a.75.75 0 0 1 0-1.5h1.352a.75.75 0 0 1 0 1.5m9.829-3.91H6.396c-2.137 0-3.574 1.499-3.574 3.729v5.36c0 2.232 1.438 3.73 3.576 3.73h11.205c2.138 0 3.575-1.498 3.575-3.73v-5.36c0-2.23-1.437-3.73-3.575-3.73M8.117 7.215a.75.75 0 0 0 .75-.75v-1.49a.75.75 0 0 0-1.5 0v1.49c0 .414.336.75.75.75M15.88 7.215a.75.75 0 0 0 .75-.75v-1.49a.75.75 0 0 0-1.5 0v1.49c0 .414.335.75.75.75M11.998 7.215a.75.75 0 0 0 .75-.75v-3.34a.75.75 0 0 0-1.5 0v3.34c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperDropBold;
