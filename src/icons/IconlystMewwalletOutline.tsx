import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMewwalletOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.562 9.32a.75.75 0 0 1 .336 1.005 3.79 3.79 0 0 0 .597 4.214 3.79 3.79 0 0 0 4.15.942.75.75 0 0 1 .557 1.393 5.29 5.29 0 0 1-5.81-1.32 5.29 5.29 0 0 1-.836-5.898.75.75 0 0 1 1.006-.337"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.007 9.462a3.79 3.79 0 0 0-4.15-.943.75.75 0 0 1-.557-1.393 5.29 5.29 0 0 1 5.81 1.32 5.29 5.29 0 0 1 .836 5.9.75.75 0 0 1-1.007.335l-4.023-2.01a.75.75 0 1 1 .67-1.342l3.282 1.64a3.8 3.8 0 0 0-.861-3.507"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMewwalletOutline;
