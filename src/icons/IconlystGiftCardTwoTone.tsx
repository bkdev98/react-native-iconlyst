import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftCardTwoTone = ({
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
      d="M6.604 4.952h10.78c2.382 0 3.866 1.773 3.866 4.277v6.772c0 2.504-1.494 4.277-3.865 4.277H6.605c-2.382 0-3.855-1.773-3.855-4.277V9.229c0-2.504 1.473-4.277 3.854-4.277"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.379 16.726q1.149-1.238 1.966-2.9h-1.41c1.167-1.368 2.17-2.994 3.065-4.776.894 1.782 1.897 3.408 3.063 4.775h-1.409q.817 1.663 1.966 2.9"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 16.726v3.552M5.91 12.888l.01.01M18.453 14.94l.01.01M7.44 9.05l.01.01M18.086 9.231h-.995m0 0h-.995m.995 0v.996m0-.996v-.994"
    />
  </Svg>
);
export default IconlystGiftCardTwoTone;
