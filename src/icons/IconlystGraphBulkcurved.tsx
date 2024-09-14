import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphBulkcurved = ({
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
      d="M15.382 12.972c-1.41.046-3.004.096-3.694-.594-.747-.748-.805-2.397-.852-3.723-.044-1.252-.08-2.242-.587-2.749-.593-.593-1.584-.663-2.718-.195-2.357.977-4.863 4.022-4.863 7.74 0 4.521 3.679 8.2 8.2 8.2 4.422 0 6.995-3.366 7.819-5.354.519-1.252.527-2.26.022-2.763-.647-.648-1.891-.606-3.327-.562"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.768 7.743C21.331 5.657 18.67 3.1 16.29 2.48c-1.167-.305-2.15-.077-2.77.637-.862.992-1.147 6.442-.143 7.446.41.41 1.445.584 2.637.584 1.89 0 4.172-.438 4.981-1.074.7-.55.974-1.378.774-2.331"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphBulkcurved;
